const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../Server');

describe('notes-api', () => {
    it('should return all notes', async () => {
        const res = await request(app).get('/notes');

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

it('should return 404 for non existent noteID ', async () => {
    const res = await request(app).get('/notes/123');
    expect(res.status).to.equal(404);
});

it('should return empty array if no notes exist', async () => {
    const res = await request(app).get('/notes');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
});

it('test create new note', async () => {
    const res = await request(app).post('/notes').send({ title: 'task1', content: 'this is a note' });

    expect(res.status).to.equal(201);

});

it('should create note even with extra spaces in input', async () => {
    const res = await request(app).post('/notes').send({ title: 'testcase', content: 'work on some testcases' });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('title');
});

it('should return 400 if title or content is missing', async () => {
    const res = await request(app).post('/notes').send({});

    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('error');
    expect(res.body.error).to.equal('Title and content required');
});

it('should not modify note if no fields provided in update', async () => {
    const createRes = await request(app)
        .post('/notes')
        .send({ title: 'Test', content: 'Test content' });

    const noteId = createRes.body.id;

    const updateRes = await request(app).put(`/notes/${noteId}`).send({});

    expect(updateRes.status).to.equal(200);
    expect(updateRes.body.title).to.equal('Test');
    expect(updateRes.body.content).to.equal('Test content');
    expect(updateRes.body.status).to.equal('closed');
});

it('should delete an existing note successfully', async () => {
    const createRes = await request(app).post('/notes').send({ title: 'Note to delete', content: 'This note will be deleted' });

    const noteId = createRes.body.id;

    const deleteRes = await request(app).delete(`/notes/${noteId}`);

    expect(deleteRes.status).to.equal(200);
    expect(deleteRes.body).to.have.property('message');
    expect(deleteRes.body.message).to.equal('Deleted successfully');
});

it('should return 404 for a non-existent note ID', async () => {
    const res = await request(app).delete('/notes/999999999');

    expect(res.status).to.equal(404);
    expect(res.body).to.have.property('error');
    expect(res.body.error).to.equal('Note not found');
});

it('should update an existing note successfully', async () => {
    const createRes = await request(app).post('/notes').send({ title: 'Old Title', content: 'Old Content' });

    const noteId = createRes.body.id;

    const updateRes = await request(app).put(`/notes/${noteId}`).send({ title: 'New Title', content: 'New Content' });

    expect(updateRes.status).to.equal(200);
    expect(updateRes.body).to.have.property('title', 'New Title');
    expect(updateRes.body).to.have.property('content', 'New Content');
    expect(updateRes.body).to.have.property('status', 'closed');
});

it('should return 404 when updating non-existent note', async () => {
    const res = await request(app).put('/notes/999999999').send({ title: 'Does not exist' });

    expect(res.status).to.equal(404);
    expect(res.body).to.have.property('error');
    expect(res.body.error).to.equal('Note not found');
});

it('should update only content and keep title unchanged', async () => {
    const createRes = await request(app).post('/notes').send({ title: 'Original Title', content: 'Original Content' });
    const noteId = createRes.body.id;

    const updateRes = await request(app).put(`/notes/${noteId}`).send({ content: 'Updated Content' });

    expect(updateRes.status).to.equal(200);
    expect(updateRes.body.title).to.equal('Original Title');
    expect(updateRes.body.content).to.equal('Updated Content');
    expect(updateRes.body.status).to.equal('closed');
});

it('should not change createdAt during update', async () => {
    const createRes = await request(app)
        .post('/notes')
        .send({ title: 'Test', content: 'Test content' });

    const noteId = createRes.body.id;
    const originalCreatedAt = createRes.body.createdAt;

    const updateRes = await request(app)
        .put(`/notes/${noteId}`)
        .send({ title: 'Updated Title' });

    expect(updateRes.status).to.equal(200);
    expect(updateRes.body.createdAt).to.equal(originalCreatedAt);
});

});
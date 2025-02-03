createAlumn: async (values) => {
    const query = 'INSERT INTO professors VALUES(NULL, ?, ?, ?, ?, ?, ?, ?, ?,?)'
    const [result] = await connection.query(query, [...values])
    return result.insertId;
}
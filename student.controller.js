/*Un endpoint PATCH que actualice el nombre de un alumno, buscándolo por DNI.*/

updateStudentName: async (req, res) => {
    try {
        const { dni, name } = req.body;

        if (!dni || !name) {
            return res.status(400).json({ message: 'Faltan datos obligatorios' });
        }

        const values = ['students', 'student_name', name, 'dni', dni];
        const result = await crudMysql.updateAlumnValue(values);

        if (result.affectedRows > 0) {
            return res.status(200).json({ message: 'Nombre actualizado correctamente' });
        }

        return res.status(404).json({ message: 'No se ha encontrado ningún alumno con ese DNI' });
    } catch (error) {
        console.error('Error al actualizar el nombre del alumno:', error);
        res.status(500).json({ message: 'Error al actualizar el nombre del alumno', error });
    }
},

/*2. Un endpoint POST para insertar un profesor.*/

insertProfessor: async (req, res) => {
    try {
        const { dni, name, lastnames, phone, email, address, pass } = req.body;

        if (!dni || !name || !lastnames || !phone || !email || !address || !pass) {
            return res.status(400).json({ message: 'Faltan datos obligatorios' });
        }

        const values = [1, name, lastnames, address, phone, email, dni, pass, 1];
        const result = await crudMysql.createAlumn(values);

        if (result.affectedRows > 0) {
            return res.status(201).json({ message: 'Profesor insertado correctamente' });
        }

        return res.status(400).json({ message: 'No se ha podido insertar el profesor' });

    } catch (error) {
        console.error('Error al insertar el profesor:', error);
        res.status(500).json({ message: 'Error al insertar el profesor', error });
    }
}
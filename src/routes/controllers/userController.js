exports.createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Nama dan email harus disertakan" });
    }
    res.status(201).json({
        message: "Pengguna berhasil dibuat",
        user: { name, email },
    });
};

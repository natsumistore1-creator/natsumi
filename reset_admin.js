const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');
const bcrypt = require('bcryptjs');

(async () => {
    const db = await open({
        filename: path.join(__dirname, 'server/data/natsumi.db'),
        driver: sqlite3.Database
    });

    const password = 'admin123';
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Try to update existing admin or insert new one
        const existing = await db.get("SELECT * FROM users WHERE username = 'admin'");
        if (existing) {
            await db.run("UPDATE users SET password = ?, role = 'admin' WHERE username = 'admin'", [hashedPassword]);
            console.log('✅ Admin password reset to: admin123');
        } else {
            await db.run(
                "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
                ['admin', 'admin@natsumi.store', hashedPassword, 'admin']
            );
            console.log('✅ Created new admin user.');
        }
    } catch (err) {
        console.error('❌ Failed:', err.message);
    }
})();

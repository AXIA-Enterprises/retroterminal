module.exports = async (req, res) => {
    if (req.method === 'GET') {
        const city = req.query.city;
        if (!city) {
            return res.status(400).json({ error: 'City is required' });
        }
        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Weather API error');
            }
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

const axios = require('axios');

//const OPENAI_API_KEY = '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';

const getEffortEstimate = async (req, res) => {
  const { project_size, complexity_level, team_experience } = req.body;

  const prompt = `
    You are an expert in software project management. Based on the following details, estimate the effort in person-months:
    - Project Size: ${project_size}
    - Complexity Level: ${complexity_level}
    - Team Experience: ${team_experience}
    Provide the effort estimate as a single number in person-months.
  `;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 50,
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const estimatedEffort = response.data.choices[0].message.content.trim();
    res.json({ estimated_effort: estimatedEffort });
  } catch (error) {
    console.error("AI Model Integration Error:", error.message);
    res.status(500).json({ error: 'Failed to get effort estimate' });
  }
};

module.exports = { getEffortEstimate };

import { Box, Typography } from '@mui/material';

export default function Skills() {
  return (
    <section id="skills">
      <Typography variant="h2">Technical Expertise</Typography>
      <Box className="skills-grid">
        {userData.skills.map((skill) => (
          <div key={skill} className="skill-item">
            {skill}
          </div>
        ))}
      </Box>
    </section>
  );
}
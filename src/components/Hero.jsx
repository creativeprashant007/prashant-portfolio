import { Typography, Button } from '@mui/material';

export default function Hero() {
  return (
    <div className="hero">
      <Typography variant="h1">{userData.name}</Typography>
      <Typography variant="h4">{userData.title}</Typography>
      <div className="contact-buttons">
        <Button variant="contained" href={userData.contact.linkedin}>
          LinkedIn
        </Button>
        <Button variant="outlined" href={userData.contact.github}>
          GitHub
        </Button>
      </div>
    </div>
  );
}
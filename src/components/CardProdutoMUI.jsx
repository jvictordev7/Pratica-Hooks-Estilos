import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function CardProdutoMUI({ imagem, nome, descricao, preco, onComprar }) {
  return (
    <Card sx={{ maxWidth: 320, borderRadius: 2, boxShadow: 3 }}>
      {imagem && (
        <CardMedia component="img" height="180" image={imagem} alt={nome} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">{nome}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ minHeight: 48 }}>
          {descricao}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1.5 }}>R$ {preco}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', pb: 2, pr: 2 }}>
        <Button size="small" variant="contained" onClick={onComprar}>Comprar</Button>
      </CardActions>
    </Card>
  );
}

import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 250px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  background-color: white;
  color: #333;
`;
const TituloProduto = styled.h3` color: #333; margin: 0 0 .5rem; `;
const PrecoProduto  = styled.p` color: #15803d; font-weight: 700; font-size: 1.2rem; margin: 0; `;

export default function CardProduto({ nome, preco }) {
  return (
    <CardContainer>
      <TituloProduto>{nome}</TituloProduto>
      <PrecoProduto>R$ {preco}</PrecoProduto>
    </CardContainer>
  );
}

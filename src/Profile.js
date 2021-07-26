import { Name, Text, Img, Container, Botoes, BotaoLinkedIn, BotaoTwitter } from "./styles"

function Profile() {
  return (
    <Container>
      <Img src="https://media-exp1.licdn.com/dms/image/C5603AQGheahBdHL5qw/profile-displayphoto-shrink_800_800/0/1606175583334?e=1632355200&v=beta&t=-Xdwp-BZlFeZgQJuW-oaXfI2C7oiCgBWtqjzFWRG50U" alt="Foto do Breno"/>
      <Name>Breno Pierin</Name>
      <Text>Programador full-stack junior em treinamento trabalhando como estagiario na empresa Darede como PMO (Gerenciamento de Projetos)</Text>
      <Botoes>
        <BotaoLinkedIn href="https://www.linkedin.com/in/breno-pierin-233771200/" target="_blank">Linkedlin</BotaoLinkedIn>
        <BotaoTwitter href="https://twitter.com/devbreno" target="_blank">Twitter</BotaoTwitter>
      </Botoes>
    </Container>
  );
}

export default Profile;

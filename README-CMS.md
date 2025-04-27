
# FP TEAM - Site Editável

## Como editar o site

Este site é editável através do Decap CMS (Content Management System). Siga as instruções abaixo para fazer alterações no conteúdo do site.

### Acessar o painel administrativo

1. Acesse o site publicado
2. Navegue para `/admin` (exemplo: https://seusite.lovable.dev/admin)
3. Faça login utilizando suas credenciais

### O que você pode editar

No painel administrativo, você pode editar:

- Texto do banner principal
- Seção Sobre Nós
- Serviços (títulos, descrições e ícones)
- Depoimentos de clientes
- Informações de contato

### Como funciona

1. Faça as alterações desejadas através da interface do CMS
2. Clique em "Publish" para publicar as alterações
3. As alterações serão aplicadas automaticamente ao site

### Configurações adicionais

Para configurar seu site com o Netlify Identity (necessário para o login no CMS):

1. Conecte seu site ao Netlify
2. Habilite o Netlify Identity nas configurações do site
3. Configure os convites para novos usuários

## Suporte Responsivo

O site foi projetado para ser totalmente responsivo e se adaptar a diferentes tamanhos de tela:

- Desktop (acima de 900px)
- Tablet (601px - 900px)
- Celular (abaixo de 600px)

Todos os elementos do site se ajustam automaticamente para oferecer a melhor experiência em qualquer dispositivo.

## Arquivos Principais

- `index.html`: Estrutura principal do site
- `src/styles/styles.css`: Estilos e responsividade
- `src/scripts/main.js`: Funcionalidades JavaScript
- `content/landing-page.md`: Conteúdo editável
- `public/admin/`: Arquivos do CMS

## Manutenção

Para garantir que seu site permaneça funcionando corretamente:

1. Mantenha os scripts e bibliotecas atualizados
2. Teste regularmente em diferentes dispositivos
3. Verifique se todas as funcionalidades estão operando normalmente

Para suporte adicional, consulte a documentação do Decap CMS em: https://decapcms.org/docs/

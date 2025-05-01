
import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "custom",
  contentSources: [
    new GitContentSource({
      rootPath: process.cwd(),
      contentDirs: ["content"],
      models: [
        {
          name: "site",
          label: "Configuração do Site",
          type: "data",
          filePath: "content/site.json",
          fields: [
            { name: "title", label: "Título do Site", type: "string" },
            { name: "favicon", label: "Favicon", type: "image" },
            { name: "navigation", label: "Itens de Navegação", type: "list", items: { 
              type: "object", 
              fields: [
                { name: "text", label: "Texto", type: "string" },
                { name: "url", label: "URL", type: "string" }
              ] 
            }}
          ]
        },
        {
          name: "hero",
          label: "Banner Principal",
          type: "data",
          filePath: "content/hero.json",
          fields: [
            { name: "title", label: "Título", type: "string" },
            { name: "subtitle", label: "Subtítulo", type: "string" },
            { name: "cta_text", label: "Texto do Botão", type: "string" },
            { name: "cta_link", label: "Link do Botão", type: "string" }
          ]
        },
        {
          name: "about",
          label: "Sobre Nós",
          type: "data",
          filePath: "content/about.json",
          fields: [
            { name: "title", label: "Título", type: "string" },
            { name: "title_highlight", label: "Destaque do Título", type: "string" },
            { name: "paragraphs", label: "Parágrafos", type: "list", items: { type: "string" } },
            { name: "cta_text", label: "Texto do Botão", type: "string" },
            { name: "cta_link", label: "Link do Botão", type: "string" }
          ]
        },
        {
          name: "services",
          label: "Serviços",
          type: "data",
          filePath: "content/services.json",
          fields: [
            { name: "title", label: "Título", type: "string" },
            { name: "title_highlight", label: "Destaque do Título", type: "string" },
            { name: "items", label: "Serviços", type: "list", items: {
              type: "object",
              fields: [
                { name: "icon", label: "Ícone", type: "string", description: "Nome do ícone do Font Awesome (ex: dumbbell, laptop)" },
                { name: "title", label: "Título", type: "string" },
                { name: "description", label: "Descrição", type: "string" },
                { name: "link", label: "Link", type: "string" }
              ]
            }}
          ]
        },
        {
          name: "testimonials",
          label: "Depoimentos",
          type: "data",
          filePath: "content/testimonials.json",
          fields: [
            { name: "title", label: "Título", type: "string" },
            { name: "title_highlight", label: "Destaque do Título", type: "string" },
            { name: "items", label: "Depoimentos", type: "list", items: {
              type: "object",
              fields: [
                { name: "author", label: "Autor", type: "string" },
                { name: "profession", label: "Profissão/Idade", type: "string" },
                { name: "feedback", label: "Depoimento", type: "text" }
              ]
            }}
          ]
        },
        {
          name: "contact",
          label: "Contato",
          type: "data",
          filePath: "content/contact.json",
          fields: [
            { name: "title", label: "Título", type: "string" },
            { name: "title_highlight", label: "Destaque do Título", type: "string" },
            { name: "submit_text", label: "Texto do Botão Enviar", type: "string" },
            { name: "contact_info", label: "Informações de Contato", type: "object", fields: [
              { name: "address", label: "Endereço", type: "object", fields: [
                { name: "title", label: "Título", type: "string" },
                { name: "value", label: "Valor", type: "string" }
              ]},
              { name: "phone", label: "Telefone", type: "object", fields: [
                { name: "title", label: "Título", type: "string" },
                { name: "value", label: "Valor", type: "string" }
              ]},
              { name: "email", label: "Email", type: "object", fields: [
                { name: "title", label: "Título", type: "string" },
                { name: "value", label: "Valor", type: "string" }
              ]},
              { name: "social_media", label: "Redes Sociais", type: "list", items: {
                type: "object",
                fields: [
                  { name: "platform", label: "Plataforma", type: "string", description: "Nome da plataforma no Font Awesome (ex: instagram, facebook-f)" },
                  { name: "url", label: "URL", type: "string" }
                ]
              }}
            ]}
          ]
        },
        {
          name: "footer",
          label: "Rodapé",
          type: "data",
          filePath: "content/footer.json",
          fields: [
            { name: "copyright", label: "Copyright", type: "string" }
          ]
        }
      ]
    })
  ],
  siteMap: ({ documents, models }) => {
    // Filter all data models for the site map
    const dataModels = models.filter((m) => m.type === "data");
    
    // Create a dummy entry for the home page
    return [
      {
        stableId: "home",
        urlPath: "/",
        document: null,
        isHomePage: true,
      } as SiteMapEntry
    ];
  },
  postInstallCommand: "npm i --no-save @stackbit/types @stackbit/cms-git"
});

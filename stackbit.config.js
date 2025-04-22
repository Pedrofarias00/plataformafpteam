
export default {
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "custom",
  contentSources: [],
  models: [
    {
      name: "landing_page",
      label: "Landing Page",
      type: "page",
      fields: [
        { name: "title", label: "Título da Página", type: "string" },
        { name: "banner_text", label: "Texto do Banner", type: "string" },
        { name: "about", label: "Sobre Nós", type: "markdown" },
        { name: "services", label: "Nossos Serviços", type: "list", items: { type: "string" } },
        { name: "testimonials", label: "Depoimentos", type: "list", items: { type: "object", fields: [
          { name: "author", label: "Autor", type: "string" },
          { name: "feedback", label: "Feedback", type: "markdown" }
        ]}},
        { name: "contact_form", label: "Formulário de Contato", type: "object", fields: [
          { name: "name", label: "Nome", type: "string" },
          { name: "email", label: "Email", type: "string" },
          { name: "message", label: "Mensagem", type: "text" }
        ]}
      ]
    }
  ],
  postInstallCommand: "npm i --no-save @stackbit/types"
}

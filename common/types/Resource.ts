export type resource = {
  id: number
  name: String
  type: ResourceType
}

enum ResourceType {
  Language,
  Framework,
  Library,
  Tool,
  Service,
}

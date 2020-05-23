interface BaseObject {
  id: number
  parentId: number | null
}

interface NestObject {
  id: number
  parentId: number | null
  children: NestObject[] | []
}

export const nest = (items: BaseObject[], id: number | null = null): NestObject[] => items
  .filter(item => item['parentId'] && item['parentId'] === id)
  .map(item => ({ ...item, children: nest(items, item.id) }));

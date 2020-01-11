interface BaseObject {
  id: number
  parentId: number | null
}

interface NestObject {
  id: number
  parentId: number | null
  children: NestObject[] | []
}

export const nest = (items: BaseObject[], id: number | null = null, link: string = 'parentId'): NestObject[] => items
  .filter(item => item[link] === id)
  .map(item => ({ ...item, children: nest(items, item.id) }));

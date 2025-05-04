export enum PostStatus {
    DRAFT = 'draft',
    PUBLISHED = 'published',
    ARCHIVED = 'archived',
}

export namespace PostStatus {
    export function values(): PostStatus[] {
        return [PostStatus.DRAFT, PostStatus.PUBLISHED, PostStatus.ARCHIVED];
    }
}
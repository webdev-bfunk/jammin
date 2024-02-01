import { defineField, defineType } from "sanity"

export default defineType({
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        defineField(
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ]
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
});
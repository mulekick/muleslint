// global typedoc options
export default {
    readme: `none`,
    entryPoints: [ `.` ],
    entryPointStrategy: `expand`,
    alwaysCreateEntryPointModule: true,
    cleanOutputDir: true,
    exclude: [ `**/node_modules/**`, `**/dist/**`, `**/sample/**` ],
    excludeNotDocumented: false,
    // important ...
    excludeExternals: true,
    jsDocCompatibility: false,
    basePath: `./`,
    outputs: [ {
        name: `markdown`,
        path: `./docs`
    } ],
    plugin: [ `typedoc-plugin-markdown`, `typedoc-plugin-remark` ],
    // typedoc-plugin-markdown specific
    outputFileStrategy: `modules`,
    expandObjects: true,
    useCodeBlocks: true,
    indexFormat: `table`,
    parametersFormat: `table`,
    interfacePropertiesFormat: `table`,
    classPropertiesFormat: `table`,
    enumMembersFormat: `table`,
    propertyMembersFormat: `table`,
    typeDeclarationFormat: `table`,
    sort: [
        `source-order`
    ],
    // skip type checking
    skipErrorChecking: true,
    // TOC
    remarkPlugins: [ {
        applyTo: `*`,
        plugins: [
            [ `remark-insert-headings`, {
                text: `Table of contents`,
                position: `start`,
                minHeadingCount: 2
            } ],
            [ `remark-toc`, {
                ordered: false,
                tight: true,
                maxDepth: 2
            } ]
        ]
    } ]
};
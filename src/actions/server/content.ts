import prismadb from "@/lib/prismadb";

export async function getAllMods(){
    const mods = await prismadb.content.findMany({
        where: {
            contentTypeId: "mod"
        },
        include: {
            categories: true
        }
    })
    return mods
}

export async function getAllTextures(){
    const textures = await prismadb.content.findMany({
        where: {
            contentTypeId: "texture"
        },
        include: {
            categories: true
        }
    })
    return textures
}

export async function getAllAssemblies(){
    const assemblies = await prismadb.content.findMany({
        where: {
            contentTypeId: "assemblie"
        },
        include: {
            categories: true
        }
    })
    return assemblies
}
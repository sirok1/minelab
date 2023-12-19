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
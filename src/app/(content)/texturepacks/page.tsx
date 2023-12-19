import Card from "@/components/UI/card/Card";
import Grid2 from "@mui/material/Unstable_Grid2";
import {getAllTextures} from "@/actions/server/content";
import MineCraftCard from "@/components/UI/card/MineCraftCard";

export default async function Mods() {
    const textures = await getAllTextures()
    return (
        <div style={{display: "flex", minWidth: "100%", minHeight: 0}}>
            <Card style={{minWidth: "100%", maxWidth: "100%"}}>
                <Grid2 container spacing={3} columns={{xs: 1, md: 12}} style={{minWidth: "100%"}}>
                    {
                        textures.map((text, i) => (
                            <Grid2 xs={1} md={3} key={i} display={'flex'}>
                                <MineCraftCard categories={text.categories} coverUrl={text.cover_url} title={text.title} description={text.description}/>
                            </Grid2>
                        ))
                    }
                </Grid2>
            </Card>
        </div>
    )
}
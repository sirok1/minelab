import Card from "@/components/UI/card/Card";
import Grid2 from "@mui/material/Unstable_Grid2";
import {getAllMods} from "@/actions/server/content";
import MineCraftCard from "@/components/UI/card/MineCraftCard";

export default async function Mods() {
    const mods = await getAllMods()
    return (
        <div style={{display: "flex", minWidth: "100%", minHeight: 0}}>
            <Card style={{minWidth: "100%", maxWidth: "100%"}}>
                <Grid2 container spacing={3} columns={{xs: 1, md: 12}} style={{minWidth: "100%"}}>
                    {
                        mods.map((mod, i) => (
                            <Grid2 xs={1} md={2} key={i} display={'flex'}>
                                <MineCraftCard categories={mod.categories} coverUrl={mod.cover_url} title={mod.title} description={mod.description}/>
                            </Grid2>
                        ))
                    }
                </Grid2>
            </Card>
        </div>
    )
}
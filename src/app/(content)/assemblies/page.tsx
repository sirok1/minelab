import Card from "@/components/UI/card/Card";
import Grid2 from "@mui/material/Unstable_Grid2";
import {getAllAssemblies} from "@/actions/server/content";
import MineCraftCard from "@/components/UI/card/MineCraftCard";

export default async function assemblies() {
    const assemblies = await getAllAssemblies()
    return (
        <div style={{display: "flex", minWidth: "100%", minHeight: 0}}>
            <Card style={{minWidth: "100%", maxWidth: "100%"}}>
                <Grid2 container spacing={3} columns={{xs: 1, md: 12}} style={{minWidth: "100%"}}>
                    {
                        assemblies.map((pack, i) => (
                            <Grid2 xs={1} md={4} key={i} display={'flex'}>
                                <MineCraftCard categories={pack.categories} coverUrl={pack.cover_url} title={pack.title} description={pack.description}/>
                            </Grid2>
                        ))
                    }
                </Grid2>
            </Card>
        </div>
    )
}
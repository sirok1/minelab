"use client"
import {Card, CardActionArea, CardContent, CardMedia, Divider} from "@mui/material";
import Image from "next/image";

export default function MineCraftCard ({categories, coverUrl, title, description}:{categories: {id: number, name: string}[], coverUrl:string, title:string, description:string}) {
    return (
        <Card style={{background: "#A7CDCE", borderRadius: 40, display: "flex", flexDirection: "column"}}>
            <CardActionArea style={{display: "flex", flexDirection: "column"}}>
                <CardMedia
                    component={"img"}
                    image={coverUrl}
                    height={200}
                    alt={`${title}_img`}
                />
                <CardContent style={{paddingBottom: ".3em", paddingInline: "2em"}}>
                    <h5 style={{color: "#3B9EA2", fontSize: 40, textAlign: "center"}}>
                        {title}
                    </h5>
                    <p style={{color: "#3B9EA2", textAlign: "center"}}>{`${description.substring(0, 60)}...`}</p>
                    <div style={{paddingTop: "1em", paddingBottom: "1em"}}>
                        <Divider/>
                        <div style={{display: "flex", gap: "1em", paddingTop: ".5em"}}>
                            {categories.map((v, i) => (
                                <Image src={`/assets/${v.name}-icon.png`} key={i} alt={v.name} height={24} width={24}/>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
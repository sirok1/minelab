import Card from "@/components/UI/card/Card";
import Image from "next/image";
import cl from "./mainPage.module.css"
import MineButton from "@/components/buttons/MineButton/MineButton";
export default function Home() {
  return (
    <>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Card style={{width: "50%"}}>
            <div>
                <Image src={"/assets/full-logo.png"} height={140} width={380} alt={"logo minelab"}/>
                  <article className={cl.mainText}>
                      <p>Привет, странник! Добро пожаловать в MINElab - твой уютный уголок в мире Майнкрафта! 🎮 🌍 Здесь тебя ждёт невероятное приключение, где можно раскрывать свои творческие способности, строить эпические сооружения и исследовать безграничные просторы этой удивительной виртуальной вселенной.</p>

                      <p>Мы - сообщество страстных выживальщиков, талантливых строителей и энтузиастов, объединенных любовью к Майнкрафту. Здесь ты найдешь множество увлекательных советов, уникальных модов, полезных ресурсов и невероятных историй, чтобы вдохновить себя на новые подвиги в мире блоков и кубиков!</p>

                      <p>Наше сообщество открыто для всех - будь ты новичок или опытный профи в Майнкрафт, у нас ты обязательно найдешь что-то для себя. Самые классные сборки, советы от профи и многое другое тебя ждет на страницах MINElab.</p>

                      <p>Так что вперед, исследуй, твори, играй в Майнкрафт вместе с нами! Давай вместе создадим самые захватывающие приключения в мире блоков! 🌟</p>
                  </article>
                <div style={{display: 'flex', justifyContent: "center"}}>
                    <Image src={"/assets/minecraft-heroes-in-battle.png"} alt={"minecraft battle"} height={340} width={390}/>
                </div>
                <div style={{display: "flex", minWidth: "100%", justifyContent: "center"}}>
                    <div style={{paddingBlock: "1em", display: "flex", maxWidth: "95%", gap: "1em", justifyContent: "space-between", alignContent: "center"}}>
                        <MineButton href={"/mods"} style={{paddingInline: "3em", paddingBlock: ".7em"}}>
                            <div style={{display: "flex", justifyContent: "space-between", alignContent: "center", gap: "1.2em"}}>
                                <span style={{fontSize: 36, color: "white"}}>Моды</span>
                                <Image alt={'mods icon'} src={"/assets/redstone-icon.png"} width={50} height={50}/>
                            </div>
                        </MineButton>
                        <MineButton href={"/texturepacks"} style={{paddingInline: "3em", paddingBlock: ".7em"}}>
                            <div style={{display: "flex", justifyContent: "space-between", alignContent: "center", gap: "1.2em"}}>
                                <span style={{fontSize: 36, color: "white"}}>Текстурпаки</span>
                                <Image alt={'texturepacks icon'} src={"/assets/mobs-icon.png"} width={50} height={50}/>
                            </div>
                        </MineButton>
                        <MineButton href={"/assemblies"} style={{paddingInline: "3em", paddingBlock: ".7em"}}>
                            <div style={{display: "flex", justifyContent: "space-between", alignContent: "center", gap: "1.2em"}}>
                                <span style={{fontSize: 36, color: "white"}}>Сборки</span>
                                <Image alt={'assemblies icon'} src={"/assets/rpg-icon.png"} width={50} height={50}/>
                            </div>
                        </MineButton>
                    </div>
                </div>
            </div>
          </Card>
        </div>
    </>
  )
}

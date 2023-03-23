import dynamic from 'next/dynamic';

// import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
const HexGrid = dynamic(
  () => import('react-hexgrid').then((h) => h.HexGrid),
  { ssr: false }
)
const Layout = dynamic(
  () => import('react-hexgrid').then((h) => h.Layout),
  { ssr: false }
)
const Hexagon = dynamic(
  () => import('react-hexgrid').then((h) => h.Hexagon),
  { ssr: false }
)

const Hexbin = () => {
  return (
    <div>
      <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
        {/* Grid with manually inserted hexagons */}
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.01} origin={{ x: 0, y: 0 }}>
          <Hexagon q={0} r={0} s={0} onClick={() => {console.log(0,0,0)}}/>
          {/* Using pattern (defined below) to fill the hexagon */}
          <Hexagon q={0} r={-1} s={1} fill="pat-1" onClick={() => {console.log(0,-1,1)}}/>
          <Hexagon q={0} r={1} s={-1} onClick={() => {console.log(0,1,-1)}}/>
          <Hexagon q={0} r={1} s={1} onClick={() => {console.log(0,1,1)}}/>
          <Hexagon q={1} r={-1} s={0} onClick={() => {console.log(1,-1,0)}}>
            {/* <Text>1, -1, 0</Text> */}
          </Hexagon>
          <Hexagon q={1} r={0} s={-1} onClick={() => {console.log(1,0,-1)}}>
            {/* <Text>1, 0, -1</Text> */}
          </Hexagon>
          {/* Pattern and text */}
          <Hexagon q={-1} r={1} s={0} fill="pat-2" onClick={() => {console.log(-1,1,0)}}>
            {/* <Text>-1, 1, 0</Text> */}
          </Hexagon>
          <Hexagon q={-1} r={0} s={1} onClick={() => {console.log(-1,0,1)}}/>
          {/* <Hexagon q={-2} r={0} s={1} onClick={() => {console.log(-2,0,1)}}/> */}
          <Hexagon q={-2} r={0} s={2} onClick={() => {console.log(-2,0,2)}}/>
          {/* <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} /> */}
        </Layout>
        {/* <Pattern id="pat-1" link="http://cat-picture" /> */}
        {/* <Pattern id="pat-2" link="http://cat-picture2" /> */}
      </HexGrid>
    </div>
  );
}

export default Hexbin;
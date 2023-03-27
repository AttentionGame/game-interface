import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import useHexNFTContract from "../hooks/useHexNFTContract";
import LoadingOverlay from 'react-loading-overlay'
import ClipLoader from 'react-spinners/ClipLoader'
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
// const hexList = [
//   {
//     q: 0,
//     r: 0,
//     s: 0
//   },
// ]

const regPattern = /q(-?\d+),r(-?\d+),s(-?\d+)/;

const Hexgrid = () => {
  const hexNFT = useHexNFTContract();
  // adjacent
  // (q, r-1, s+1)
  // (q, r+1, s-1)
  // (q+1, r, s-1)
  // (q-1, r, s+1)
  // (q-1, r+1, s)
  // (q+1, r-1, s)
  const [hexList, setHexList] = useState([])
  const [mintList, setMintList] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let result = [];
    for(let item of hexList) {
      const match = item.match(regPattern);
      const q = Number(match[1])
      const r = Number(match[2])
      const s = Number(match[3])
      const top = `q${q},r${r-1},s${s+1}`
      const bottom = `q${q},r${r+1},s${s-1}`
      const leftTop = `q${q+1},r${r},s${s-1}`
      const leftBottom = `q${q-1},r${r},s${s+1}`
      const rightTop = `q${q-1},r${r+1},s${s}`
      const rightBottom = `q${q+1},r${r-1},s${s}`
      if (hexList.indexOf(top) < 0 && result.indexOf(top) < 0) {
        result.push(top)
      }
      if (hexList.indexOf(bottom) < 0 && result.indexOf(bottom) < 0) {
        result.push(bottom)
      }
      if (hexList.indexOf(leftTop) < 0 && result.indexOf(leftTop) < 0) {
        result.push(leftTop)
      }
      if (hexList.indexOf(leftBottom) < 0 && result.indexOf(leftBottom) < 0) {
        result.push(leftBottom)
      }
      if (hexList.indexOf(rightTop) < 0 && result.indexOf(rightTop) < 0) {
        result.push(rightTop)
      }
      if (hexList.indexOf(rightBottom) < 0 && result.indexOf(rightBottom) < 0) {
        result.push(rightBottom)
      }
    }
    setMintList(result)
  }, [hexList])
  const getHexGrid = async () => {
    let i = 0
    const result = [];
    while(true) {
      i += 1
      const _h = await hexNFT.idToHexagon(i);
      const q = _h?.q;
      const r = _h?.r;
      const s = _h?.s;
      if(q !== '' && r !== '' && s !== '') {
        result.push(`q${q},r${r},s${s}`)
      } else {
        break;
      }
    }
    setHexList(result);
  }
  useEffect(() => {
    if(hexNFT) getHexGrid()
  }, [hexNFT])
  const mint = (str, i) => {
    setLoading(true);
    const match = str.match(regPattern);
    hexNFT?.mint(match[1], match[2], match[3]).then((tx: any) => {
      console.log(tx);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    })
    hexNFT?.on('CreateHexagon', (owner, hexagonKey, hexagon) => {
      console.log('CreateHexagon', owner, hexagonKey, hexagon);
      if (hexagonKey) {
        setHexList([
          ...hexList,
          str
        ])
        setMintList(mintList.splice(i, 1))
      }
    })
  }
  return (
    <LoadingOverlay
      active={loading}
      spinner={<ClipLoader color="green" />}
    >
      <div>
        {/* {JSON.stringify(hexList)} */}
        <HexGrid>
          {/* Grid with manually inserted hexagons */}
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.01} origin={{ x: 0, y: 0 }}>
            <>
              {
                hexList.map((str) => {
                  const match = str.match(regPattern);
                  return match && (
                    <Hexagon
                      key={str}
                      q={Number(match[1])}
                      r={Number(match[2])}
                      s={Number(match[3])}
                      style={{fill:'green'}}
                    />
                  )
                })
              }
              {
                mintList.map((str, i) => {
                  const match = str.match(regPattern);
                  return match && (
                    <Hexagon
                      key={str}
                      q={Number(match[1])}
                      r={Number(match[2])}
                      s={Number(match[3])}
                      style={{fill:'#ccc'}}
                      onClick={() => mint(str, i)}
                    />
                  )
                })
              }
            </>
            {/* <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} /> */}
          </Layout>
          {/* <Pattern id="pat-1" link="http://cat-picture" /> */}
          {/* <Pattern id="pat-2" link="http://cat-picture2" /> */}
        </HexGrid>
      </div>
    </LoadingOverlay>
  );
}

export default Hexgrid;
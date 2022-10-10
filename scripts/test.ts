import { ethers } from 'hardhat'
import Artifact from '../generated/artifacts/contracts/test.sol/Test.json'
import { Test } from '../generated/types'

const addr = '0xB0c2629ADa79c1E241972edfa5Ac204b553F88F7'

const main = async () => {
  const [signer] = await ethers.getSigners()
  const contract = (await new ethers.Contract(
    addr,
    Artifact.abi,
    signer,
  )) as Test
  const owner = await contract.owner()
  console.log(owner)
}

main()

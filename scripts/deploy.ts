import { ethers } from 'hardhat'

const main = async () => {
  const contract = await ethers.getContractFactory('Test')
  const deploy = await contract.deploy()

  console.log('contract deployed to', deploy.address)
}

main()

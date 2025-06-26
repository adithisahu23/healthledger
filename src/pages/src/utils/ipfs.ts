import { create } from '@web3-storage/w3up-client'

export async function uploadToIPFS(file: File) {
  const client = await create()
  const cid = await client.uploadFile(file)
  return `ipfs://${cid}`
}

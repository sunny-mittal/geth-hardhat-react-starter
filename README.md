# Starter project for writing smart contracts

#### **Important**: These instructions are for a private ethereum network and is not set up to be secure! It's for learning/testing smart contracts.

### Prerequisites

Install go and geth (look it up)

From root, create necessary directories (we're making a three-node network)

```
$ mkdir -p geth/{node1,node2,bnode}
```

Create new accounts for the main nodes and record the generated addresses and passcodes (add password to node-level `password` file):

```
$ cd geth/node1
$ geth --datadir data account new
$ ../node2
$ geth --datadir data account new
$ ..
```

Use puppeth to generate new genesis.json

```
$ puppeth // follow commands to generate new json and export it as <name>
```

Initialize both nodes with the genesis file

```
$ cd node1 && geth --datadir data init ../<name>.json && cd ..
$ cd node2 && geth --datadir data init ../<name>.json && cd ..
```

Generate bootnode key

```
$ cd bnode && bootnode -genkey boot.key
```

Start up the bootnode on port 30301 (or whatever)

```
$ bootnode -nodekey boot.key -verbosity 7 -addr 127.0.0.1:30301 // copy enode address
```

Boot up mining node (in another terminal started at root)

```
$ cd geth/node1
$ noglob geth --networkid 2724 --datadir data --bootnodes <enode> --port 30303 --ipcdisable --syncmode full --allow-insecure-unlock  --unlock 0x0Fe160906E6f6cBcB30129d8Ba62De9AF983C1c6 --password password --mine console
```

Boot up non-mining node (in another terminal started at root)

```
$ cd geth/node2
$ noglob geth --networkid 2724 --datadir data --bootnodes enode://42403e445ca56e9b5c9af60a25ff736f35feeb7b41d488559d2a34eeaa5e0dda5c99fe05d5eccc7fba36df452246b13f039d99239a20d78211205dad9f76d1f1@127.0.0.1:0?discport=30301 --port 30304 --ipcdisable --syncmode full --allow-insecure-unlock --http.corsdomain "*" --http.port 8546 --unlock 0xF0E6E0f5C7548b1C09E95465e063bd5ff4eD8c83 --authrpc.port 8552 --password password console
```

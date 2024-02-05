#!/bin/bash
besu --data-path=./Node-1/data --genesis-file=./genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all"
#!/bin/bash
besu --data-path=. public-key export-address --to=key.address
besu --data-path=. public-key export --to=key.pub
## Tree
```
terraform/
├── production/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── terraform.tfvars
├── staging/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── terraform.tfvars
└── modules/
├── ec2/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
└── vpc/
├── main.tf
├── variables.tf
└── outputs.tf
```

## Description
modules/: 再利用可能なコンポーネント。例えば、VPCやEC2インスタンスなど。  
staging/, production/: 環境ごとのディレクトリ。各環境で異なるterraform.tfvarsを使って設定をカスタマイズできます。  
main.tf: リソース定義ファイル。  
variables.tf: 変数の宣言ファイル。  
outputs.tf: 出力変数の定義ファイル。  
terraform.tfvars: 変数の値を設定するファイル。  

## How to create a new environment
- aws cli
  - brew install awscli
  - aws configure
  - aws configure --profile <profile_name>
    - aws_access_key_id
    - aws_secret_access_key
    - region
- terraform
  - terraform init
  - terraform plan
    - if you an error like "Error: No valid credential sources found"
    - export AWS_PROFILE=<profile_name>
    - terraform plan again
  - terraform apply

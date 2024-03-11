## Tree
```
ansible/
├── playbooks/
│   ├── setup_ec2.yml
│   └── deploy_app.yml
├── roles/
│   ├── common/
│   │   ├── tasks/
│   │   ├── handlers/
│   │   └── templates/
│   ├── webserver/
│   │   ├── tasks/
│   │   ├── handlers/
│   │   └── templates/
│   └── database/
│       ├── tasks/
│       ├── handlers/
│       └── templates/
└── inventory/
    ├── staging.ini
    └── production.ini
```

## Description
playbooks/: 特定のタスクを実行するためのプレイブック。例えば、EC2インスタンスのセットアップやアプリケーションのデプロイメントなど。 
roles/: 再利用可能な設定のセット。各ロールは特定のタスク（例：webサーバーの設定、データベースの設定）を担います。  
inventory/: 対象となるホストのグループを定義するインベントリファイル。  

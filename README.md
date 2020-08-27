<h1 align="center">
  Çakraz Emlak
</h1>

Real estate website wtih Gatsby & Strapi.

## 🚀 Setup Enviorement

1.  **Clone Strapi CMS**

    Clone [cakraz-emlak-cms](https://github.com/oktay/cakraz-emlak-cms) for backend and content managment.

    ```shell
    # clone repo
    git clone https://github.com/oktay/cakraz-emlak-cms
    yarn install
    ```

2.  **Create Postgresql Database.**

    ```shell
    # launch psql
    psql postgres # or psql -U postgres
    ```
    
    ```shell
    # psql shell
    CREATE DATABASE cakraz;
    CREATE ROLE db_user WITH LOGIN PASSWORD 'password' CREATEDB;
    GRANT ALL PRIVILEGES ON DATABASE dbname TO db_user;
    ```

3.  **Start Strapi Server**

    ```shell
    cd cakraz-emlak-cms
    yarn develop
    ```

    Your backend/cms is now running at `http://localhost:1337`!
    
    *Note: If your first time, you need create admin user, create **at least one content for each content type** otherwise you cant run gatsby server.*

## 🌟 Run Frontend

1.  **Clone Frontend***

    ```shell
    cd cakraz-emlak
    yarn install
    ```
    
2. **Run server**

   ```shell
   yarn develop
   ```
    
    Your site is now running at `http://localhost:8000!`

    *Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool     in the Gatsby tutorial.*

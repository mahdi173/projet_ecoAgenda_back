# EcoAgenda Backend

## Description
EcoAgenda est une application web éco-conçue permettant de consulter et d'ajouter des événements à venir. L'application est conçue pour être légère, responsive, rapide et minimaliste.

## Choix Technologiques
Nous avons choisi Node.js, Express et MySQL pour le développement du backend de l'application en raison de :

### Node.js :

Performance et capacité à gérer un grand nombre de requêtes en temps réel.

Compatibilité avec JavaScript, facilitant l'uniformisation entre le frontend et le backend.

Aspect asynchrone et événementiel, idéal pour des applications rapides et réactives.

### Express.js :

Framework minimaliste et performant pour Node.js.

Facilité de configuration et de gestion des routes.

### MySQL :

Base de données relationnelle robuste et bien optimisée.

Bonne intégration avec Node.js via Sequelize ou mysql2.

Fiabilité et support.

## Installation et Configuration

### 1. Cloner le projet

```sh
git clone git@github.com:mahdi173/projet_ecoAgenda_back.git
cd projet_ecoAgenda_back
```

### 2. Installer les dépendances

```sh
npm install
```

### 3. Configurer les variables d'environnement
Créer un fichier `.env` à partir le fichier `.env.example`:

```sh
cp .env.example .env
```

### 4. Lancer le projet

```sh
node server
```
const questions = [
{"question":"Qu'est-ce que le CRUD?", "answer":"L'acronyme informatique anglais CRUD désigne les quatre opérations de base pour la persistance des données, en particulier le stockage d'informations en base de données. Soit : create : créer read : lire update : mettre à jour delete : supprimer."},
{"question":"Qu'est-ce que React", "answer":"React est une bibliothèque JavaScript open-source qui est utilisée pour construire des interfaces utilisateur spécifiquement pour des applications d'une seule page. Single page application, Créer des composants"},
{"question":"Qu'est ce qu'axios?", "answer":"Axios est une librairie cliente HTTP qui vous permet de faire des requêtes sur une route donnée. Il peut s'agir d'une API externe ou de votre propre serveur backend Node.js"},
{"question":"A quoi sert dotenv", "answer":" Le module dotenv Le dotenv est un module sans dépendance qui charge les variables d'environnement à partir d'un fichier . fichier env dans le processus. env.Dotenv vous permet de séparer les secrets de votre code source. Ceci est utile dans un environnement collaboratif (par exemple, travail ou open source) où vous ne souhaitez peut-être pas partager vos identifiants de connexion à la base de données avec d'autres personnes. Au lieu de cela, vous pouvez partager le code source tout en permettant à d'autres personnes de créer leur propre fichier ."},
{"question":"Qu'est ce qu'un JWT", "answer":"Les « JSON Web Token » ou JWT sont des jetons générés par un serveur lors de l’authentification d’un utilisateur sur une application Web, et qui sont ensuite transmis au client. Ils seront renvoyés avec chaque requête HTTP au serveur, ce qui lui permettra d’identifier l’utilisateur.Il est composé d’un header, payload et signature.Pour ce faire, les informations contenues dans le jeton sont signées à l’aide d’une clé privée détenue par le serveur. Quand il recevra à nouveau le jeton, le serveur n’aura qu’à comparer la signature envoyée par le client et celle qu’il aura générée avec sa propre clé privée et à comparer les résultats. Si les signatures sont identiques, le jeton est valide."},
{"question":"Qu'est-ce que le package JSON?", "answer":"le package.json est un fichier de configuration présent dans tout projet JavaScript. Il permet de  définir les metadatas d’un projet, d’installer toutes ses dépendances, et d’exécuter les différents scripts npm."},
{"question":"Qu'est ce que le local storage?", "answer":"C'est une technique d'enregistrement de données dans un navigateur web."},
{"question":"A quoi sert une maquette?", "answer":"L’ objectif premier d’une maquette est de concrétiser une idée. Elle peut ensuite servir d’autres objectifs secondaires : explorer une idée, la tester, ou encore convaincre des parties prenantes ou sa hiérarchie du concept."},
{"question":"qu'est ce qu'une foreign key?", "answer":"Dans une table de base de données MySQL, une clé étrangère est un champ dont la valeur fait référence à la clé primaire d’une autre table.Les clés étrangères matérialisent les relations entre les tables."},
{"question":"Qu’est ce que les méthodes agiles ?", "answer":"En opposition aux méthodes de gestion de projet traditionnelles (Cycle en V par exemple), les méthodes Agile prônent une organisation plus souple et adaptable. Les plus populaires sont Kanban, Safe et Scrum.Une méthode agile est une approche itérative et collaborative, capable de prendre en compte les besoins initiaux du client et ceux liés aux évolutions.Le client est au centre et impliqué dans la réalisation du projet du début à la fin."},
{"question":"Définition de Base de données", "answer":"Il s’agit d’une collection de données.C’est un ensemble d’informations qui est organisé de manière à être facilement accessible, géré et mis à jour. La base de données est utilisée comme un espace de stockage, de gestion et de récupération de données."},
{"question":"Qu'est ce que NPM?", "answer":"NPM est l’abréviation de Node Package Manager, qui est un outil gérant les bibliothèques de programmation Javascript pour Node.js.C’est un gestionnaire de paquets."},
{"question":"Qu'est ce qu'une cardinalité?", "answer":"Les cardinalités sont des caractères (0,1, n) qui fonctionnent par couple et qui sont présents de chaque côté d’une association, La cardinalité indique le nombre d'occurrences (aucune, une ou plusieurs) d'une entité par rapport à une autre entité.Cette notion est utilisée par la modélisation Merise et UML."},
{"question":"Quel sont les cycles de vie d'un composant réact?", "answer":"Mount : le montage. Il intervient quand une instance du composant est créée dans le DOM. Update : la mise à jour. Ce cycle de vie est déclenché par un changement d'état du composant.Unmount : le démontage. Cette méthode est appelée une fois qu'un composant est retiré du DOM."},
{"question":"Qu'est ce que le DOM", "answer":"Le DOM, qui signifie Document Object Model (c'est-à-dire modèle d'objet de document, en français), est une interface de programmation qui est une représentation du HTML d'une page web et qui permet d'accéder aux éléments de cette page web et de les modifier avec le langage JavaScript."},
{"question":"Qu'est ce que useContext", "answer":"Le contexte React nous permet de transmettre des données à nos composants sans utiliser de props.Nous enroulons le fournisseur (provider) autour de l'arborescence des composants dont nous voulons transmettre la valeur donnée. Ensuite, nous plaçons le Consommateur (Context) dans le composant dont nous voulons consommer la valeur."},
{"question":"Qu'est ce Hook Form?", "answer":"React Hook Form est un frameworks flexible pour react et react native pour construire des formulaires. "},
{"question":"Qu'est ce que Yup Ou Joi?", "answer":"yup est une  bibliothèques  simple  pour valider la structure des données."}, 
{"question":"Qu'est ce que le regex?", "answer":" Quand ce n'est pas un style de musique, le regex est Une expression régulière (Regular Expression, souvent abrégée en regex ou RegEx et plus rarement expression rationnelle) décrit un motif, un pattern que nous souhaitons rechercher et localiser dans du texte (y compris des chiffres)."},
{"question":"Définissez une fonction synchrone", "answer":" Fonction qui exécute immédiatement l’intégralité du code ligne par ligne et retourne une valeur "},
{"question":"Qu'est ce qu'une fonction asynchrone?", "answer":" Code exécuté ligne par ligne mais attends les réponses de certaines promesses tout en exécutant le reste quand même.Incontournable pour créer des applications JS non-bloquante lors d’accès à un serveur distant."},
{"question":"Qu'est ce qu'une bibliotheque?", "answer":"Une librairie est un ensemble de fonctions et de classes déjà codées dans un langage spécifique. Ainsi, le développeur (ou programmeur) peut aller y piocher en fonction (!) de ses besoins. Inutile de coder toutes les fonctions. Il leur suffit d'aller récupérer celles qui effectuent ce qu'il souhaite."},
{"question":"Qu'est ce qu'une fonction", "answer":"Une fonction est une procédure JavaScript, un ensemble d'instructions effectuant une tâche ou calculant une valeur. Afin d'utiliser une fonction, il est nécessaire de l'avoir auparavant définie au sein de la portée dans laquelle on souhaite l'appeler."},
{"question":"Qu'est ce qu'un call back?", "answer":"une fonction de rappel (callback en anglais) ou fonction de post-traitement est une fonction qui est passée en argument à une autre fonction. Cette dernière peut alors faire usage de cette fonction de rappel comme de n'importe quelle autre fonction, alors qu'elle ne la connaît pas par avance."},
{"question":"Qu'est ce qu'un paramètre et qu'est ce qu'un argument?", "answer":"Les paramètres d'une fonction sont les noms listés dans la définition de la fonction.Les arguments d'une fonction sont les valeurs réelles passées à la fonction. Les paramètres sont initialisés avec les valeurs des arguments fournis"},
{"question":"Définition d'une API", "answer":"Interface permettant l’interaction entre différentes applications"},
{"question":"Qu'est ce que le modele MVC?", "answer":"MVC : Sépare l’application en différentes couches structuréesModèles : créer, modifier, supprimer, lire de la donnéeContrôleur : interprétation de l’action et contrôle de la donnée reçu REQ, RES.Vue : Client consommant une IHM (interface graphique) qui va envoyer une action"},
{"question":"Qu'est ce qu'une query string?", "answer":"Une chaîne de requête ou Query String, est une partie qui inclut à la droite de l’URL de base, des champs ajoutés pour des paramètres spécifiques à un navigateur Web ou une application client : un point d’interrogation, un signe égal et des groupes clé/valeur séparés par le caractère &."},
{"question":"A quoi sert INNER JOIN?", "answer":"permet de sélectionner les lignes communes pour les champs demandés"},
{"question":"Qu'est ce qu'une table d'association'?", "answer":"Relation ManyToMany donc table intermédiaire avec des FK qui feront références à l’ID des autres tables à relier."},
{"question":"Qu'est ce que le MCD?", "answer":"(modèle conceptuel de données) Il permet d’établir une représentation claire des données, les relations qui les relient, ainsi que des cardinalités dans ces relations."},
{"question":"Qu'est ce que le MLD?", "answer":"(modèle logique de données) l’idée est de traduire le MCD en y ajoutant les clés primaires et étrangères et les tables de jointures en fonction des cardinalités."},
{"question":"Qu'est ce que le MPD?", "answer":"(modèle physique de données)On ajoute les spécificités comme le type de donnée pour chaque donnée, s’il y a une valeur par défaut, si les données doivent être uniques etc"},
{"question":"Qu'est ce que la programmation orientée objet?", "answer":"La programmation orientée objet (POO) est un paradigme informatique consistant à définir et à faire interagir des objets grâce à différentes technologies, notamment les langages de programmation. On appelle objet, un ensemble de variables complexes et de fonctions, comme par exemple un bouton ou une fenêtre sur l’ordinateur, des personnes (avec les noms, adresse...). Presque tout peut être considéré comme un objet. L’objectif de la programmation orientée objet est de se concentrer sur l’objet lui-même et les données, plutôt que sur la logique nécessaire et les actions à mener pour faire cette manipulation."},
{"question":"Qu'est ce que le SEO", "answer":"Search Engine Optimization (Optimisation pour les moteurs de recherche) : Ensemble des techniques mises en œuvre pour améliorer la position d’un site web sur les pages de résultats des moteurs de recherche (SERP). On l’appelle aussi référencement naturel."},
{"question":"Qu'est ce que le RGPD?", "answer":"Le Règlement général sur la protection des donnéesAvec l’utilisation des nouvelles technologies, les flux de données personnelles sont de plus en plus importants. Le RGPD vise à encadrer leur traitement dans le but de protéger la vie privée des personnes en respectant un règlement."},
{"question":"Comment optimiser le SEO pour react?", "answer":"SOLUTION : Framework Next.JS (rendu hybride statique et serveur) qui permet de générer en amont le code HTML afin de le transmettre directement au client."},
{"question":"Qu'est ce qu'un test unitaire?", "answer":"Le test unitaire est un moyen de vérifier qu’un extrait de code fonctionne correctement. "},
{"question":"Qu'est ce qu'un test d'intégration?", "answer":"Valider l'intégration des différents modules entre eux. Ils permettront de mettre en évidence des problèmes d'interfaces entre différents programmes."},
{"question":"Qu'est ce qu'un test fonctionnel??", "answer":"Vérifier la conformité de l'application développée avec le cahier des charges initial. Ils sont donc basés sur les spécifications fonctionnelles et techniques."},
{"question":"Qu'est ce qu'un test de non régression?", "answer":"vérifier que des modifications n'ont pas altérées le fonctionnement del'application. A faire lors d’une migration par exemple."},
{"question":"Qu'est ce qu'une faille XSS?", "answer":"Le cross-site scripting (abrégé XSS) est un type de faille de sécurité des sites web permettant d'injecter du contenu dans une page, provoquant ainsi des actions sur les navigateurs web visitant la page. Les possibilités des XSS sont très larges puisque l'attaquant peut utiliser tous les langages pris en charge par le navigateur (JavaScript, Java...) et de nouvelles possibilités sont régulièrement découvertes notamment avec l'arrivée de nouvelles technologies comme HTML5. Il est par exemple possible de rediriger vers un autre site pour de l'hameçonnage ou encore de voler la session en récupérant les cookies."},
{"question":"Qu'est ce qu'une injection SQL?", "answer":"Une injection SQL, parfois abrégée en SQLi, est un type de vulnérabilité dans lequel un pirate utilise un morceau de code SQL (« Structured Query Language », langage de requête structuré) pour manipuler une base de données et accéder à des informations potentiellement importantes. C'est l'un des types d'attaques les plus répandus et menaçants, car il peut potentiellement être utilisé pour nuire à n'importe quelle application Web ou n'importe quel site Web qui utilise une base de données SQL "},
{"question": "Qu'est ce que le Responsive Design ?","answer": "Le Responsive Design ou plus précisément le Responsive Web Design (RWD) est une technique de conception d’interface digitale qui fait en sorte que l’affichage d’une quelconque page d’un site s’adapte de façon automatique à la taille de l’écran du terminal qui le lit"},
{"question":"Comment se distingue un wireframe d'une maquette?", "answer":" Contrairement au wireframe qui montre la structure de base et l'organisation des éléments du site web, la maquette va plus loin. C'est lors de cette étape du maquettage qu'on va visualiser les premières versions du design graphique. Le seul point commun entre le wireframe et la maquette, c'est que les deux sont statiques. "},
{"question":"Quelle est la différence entre DROP TABLE et TRUNCATE TABLE?", "answer":" DROP TABLE va supprimer la table tandis que TRUNCATE TABLE va uniquement vider les élements de la table  "},
{"question":"Qu’est ce que le protocole http?", "answer":"L'http, pour Hypertext Transfer Protocol, désigne dans le langage informatique un protocole de communication entre un client et un serveur pour le World Wide Web. On le traduit littéralement en français par protocole de transfert hypertexte."},
{"question":"Qu’est ce qu’un certificat SSL ?", "answer":"Un certificat SSL est un fichier de données qui lie une clé cryptographique aux informations d'une organisation. Installé sur un serveur, le certificat active le cadenas et le protocole « https », afin d'assurer une connexion sécurisée entre le serveur web et le navigateur. Le SSL est généralement utilisé pour sécuriser les transactions bancaires, le transfert de données et les informations de connexions. Il est récemment devenu la norme pour sécuriser la navigation sur les sites de réseaux sociaux."},
{"question":"Différence entre chiffrement et hachage ?", "answer":"Les fonctions de hachage permettent d'assurer l'intégrité des données. Les signatures numériques, en plus d'assurer l'intégrité, permettent de vérifier l'origine de l'information et son authenticité. Enfin, le chiffrement, parfois improprement appelé cryptage, permet de garantir la confidentialité d'un message."},
{"question":"Que signifie REST ?", "answer":"REST (representational state transfer) est un style d'architecture logicielle définissant un ensemble de contraintes à utiliser pour créer des services web."},
{"question":"Qu’est ce que l’ajax?", "answer":"Ajax est une méthode utilisant différentes technologies ajoutées aux navigateurs web entre 1995 et 2005, et dont la particularité est de permettre d'effectuer des requêtes au serveur web et, en conséquence, de modifier partiellement la page web affichée sur le poste client sans avoir à afficher une nouvelle page complète. Cette architecture informatique permet de construire des applications Web et des sites web dynamiques interactifs. Ajax est l'acronyme d'asynchronous JavaScript and XML : JavaScript et XML asynchrones."},
{"question":"C’est quoi une promesse ?", "answer":"Une promesse est un objet ( Promise ) qui représente la complétion ou l'échec d'une opération asynchrone."},
{"question":"Différence entre id et class ?", "answer":"L'attribut id assigne un nom à l'élément sur lequel il s'applique. Pour un balisage correct, il ne peut y avoir qu'un et un seul élément avec ce nom. L'attribut class assigne une nom de classe à un élément. Ce nom peut être utilisé sur plusieurs éléments dans la même page."},
{"question":"Qu'est-ce qu'un prototype pour application mobile ?", "answer":"Le prototype est la toute première version de l'application mobile avant de passer à l'étape du codage. Il ne s'agit pas d'une simple ébauche, mais plutôt d'un modèle qui permettra de réaliser des tests grandeur nature."},
{"question":"Qu'est ce que useState?", "answer":"useState est le hook utilisé pour gérer le state de React. Il doit être utilisé pour gérer les données dynamiques.useState prend la valeur par défaut en argument et retourne un tableau. Le premier élément du tableau retourné est la valeur du state et le deuxième élément est une fonction que nous pouvons appeler pour mettre à jour cette valeur. A chaque changement de state React met à jour l'interface utilisateur"},
{"question":"Qu'est ce que le useEffect?", "answer":"useEffect -> useEffect est le hook que tu peux utiliser pour accéder aux phases du cycle de vie de React.useEffect prend deux arguments :Une fonction de rappel (callback),Un tableau des dépendances.Le callback du useEffect sera appelé Quand le composant sera monté (phase de montage).Après le rendu lors d'une phase de mise à jour ⇒ Si une des valeurs du tableau des dépendances a changé, ou s'il n'y avait pas de dépendance (phase de mise à jour).Avant le démontage du composant si tu as retourné une fonction à la fin du callback (phase de démontage).Pas de tableau des dépendances = le callback du useEffect s'exécute pour chaque rendu (phase de mise à jour)."},
{"question":"", "answer":""},

];
  
  export default questions;
// {"question":"", "answer":""},

---
title: Typographie
description: Exemples d'éléments de typographie ; titre, gras...
sidebar:
  - toc
layout: sidebar
---

# Titre de niveau 1

## Titre de niveau 2

### Titre de niveau 3

#### Titre de niveau 4

##### Titre de niveau 5

###### Titre de niveau 6

---

# Titre de niveau 1

Donec vitae sapien ut libero venenatis faucibus. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Ut a nisl id ante tempus hendrerit. Duis leo.

In ut quam vitae odio lacinia tincidunt. Cras sagittis. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi.

## Titre de niveau 2

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Nullam sagittis. Praesent nonummy mi in odio.

Vivamus consectetuer hendrerit lacus. Cras ultricies mi eu turpis hendrerit fringilla. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. In ut quam vitae odio lacinia tincidunt.

### Titre de niveau 3

Praesent nec nisl a purus blandit viverra. Cras non dolor.

#### Titre de niveau 4

##### Titre de niveau 5

###### Titre de niveau 6

## Règles horizontales

---

## Mise en évidence

**Ceci est du texte en gras**

*Ceci est du texte en italique*

~~Barré~~

---

## Blocs de citation

> Ceci est un bloc de citation
>
> Les blocs de citation peuvent également être imbriqués...
>
> > ...en ajoutant des signes de plus juste à côté les uns des autres...
> >
> > > ...ou avec des espaces entre les flèches.

---

## Listes

### Non ordonnée

* Créez une liste en commençant une ligne par `+`, `-` ou `*`
* Les sous-listes sont créées en indentant de 2 espaces :

  * Changer le caractère de marque force le début d'une nouvelle liste :

    * Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    * Nulla volutpat aliquam velit
* Très facile !

### Ordonnée

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Vous pouvez utiliser des nombres séquentiels...
5. ...ou garder tous les nombres comme `1.`

### Commencer la numérotation avec un décalage

57. foo
58. bar

---

## Code

Code en ligne `code`

Code indenté

```text
// Some comments
line 1 of code
line 2 of code
line 3 of code
```

Bloc de code "fences"

```text
Texte d'exemple ici...
```

Mise en évidence de la syntaxe

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

---

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | chemin vers les fichiers de données à fournir pour les modèles.          |
| engine | moteur à utiliser pour le traitement des modèles. Handlebars est le défaut.|
| ext    | extension à utiliser pour les fichiers de destination.                    |

Colonnes alignées à droite

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | chemin vers les fichiers de données à fournir pour les modèles.          |
| engine | moteur à utiliser pour le traitement des modèles. Handlebars est le défaut.|
| ext    | extension à utiliser pour les fichiers de destination.                    |

---

## Liens

[Texte du lien](http://dev.nodeca.com)

[lien avec titre](http://nodeca.github.io/pica/demo/ "texte du titre!")

Lien converti automatiquement https://github.com/nodeca/pica (activer la fonctionnalité de lien pour voir)

---

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "Le Stormtroopocat")

Comme les liens, les images ont aussi une syntaxe de note de bas de page

![Texte alternatif](https://octodex.github.com/images/dojocat.jpg "Le Dojocat")

Avec une référence plus tard dans le document définissant l'emplacement de l'URL

---

## Plugins

### [<mark>](https://github.com/markdown-it/markdown-it-mark)

==Texte marqué==

### [Conteneurs personnalisés](https://github.com/markdown-it/markdown-it-container)

:::avertissement
*ici se trouvent des dragons*
:::

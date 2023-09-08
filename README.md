## Описание работы с репозиторием ЗЭТА
<div style="width: 100%; display: flex">
<img width="117" height="51" src="./public/logo.jpg" style="margin: 10px auto" alt="Логотип">
</div>

Режимы запуска проекта:

```bash
# Запуск режима разработки hot reload:
npm run dev / yarn dev

# Сборка проекта (статическая генерация сайта - SSG):
npm run export / yarn export 

# Запуск проекта в режиме cold reload:
npm run start / yarn start
```

### Для работы с ветками и коммитов используется упрощенная методология Git Flow :)

#### `main` - основная ветка
#### `feature: -message` - коммит с фичами
#### `chore: -message` - обслуживание кода
#### `layout: -message` - коммит c версткой
#### `hotfix: -message` - фикс багов
#### `ref: -message` - рефакторинг

#### Пример создания ветки: `ivan/zeta-01`

#### Пример коммита созданной ветки: `feature: Настроена отправка формы обратной связи`

Сервер запускается на порту [http://localhost:3000](http://localhost:3000)



В разработке проекта использованы следующие библиотеки: [`React.js`](https://react.dev/), [`Next.js`](https://nextjs.org), [`TailwindCSS`](https://tailwindcss.com/)
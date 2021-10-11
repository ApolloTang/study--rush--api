## Description of this project

#### **This is a copy of study--rush--web-apps/2a--get-eslint-to-work, I am using this to study Rush api**

This is a monorepo for web application managed by [@microsoft/rush](https://rushjs.io/) and [@mirosoft/rushstack](https://rushstack.io/).

---

### Note 📝 📝 

💡 Noted that I am not using `heft-webpack` for my web-application. While heft-webpack uses tsc for for transpilation, this web-application is using babel instead. However, all its dependencies (React components and  non-React dependencies) are managed by rigged heft (thus tsc transpilation). For more discussion of babel vs tsc see [this discussion](https://rushstack.zulipchat.com/#narrow/stream/262522-heft/topic/.28play.20nice.20with.20babel.29.20how.20to.20run.20heft.20task.20manually.3F)

✨ Another feature worth mention is the use of [typescript's Project References](https://www.typescriptlang.org/docs/handbook/project-references.html#:~:text=Project%20references%20are%20a%20new,in%20new%20and%20better%20ways.). With typescript's Project References, jump to definition in IDE works without prebuild. For more information see [this](https://github.com/microsoft/rushstack/issues/2604).  

### ⚠️ [Limitation of using typescript's Project References](#limitation-of-using-typescripts-proj-ref)

There are limitations using typscript's project references. For more details see [this](https://github.com/microsoft/rushstack/issues/2604#issuecomment-818996848). I don't having the problems describes in that issue because I don't have sub package. In additon, I am not relying it for transpiling typescript source code, and heft is not invoke tsc with the `--build` flag. The purpose of typescript's project references in this setup is only for IDE's jump to definition to work and stop typescript language server from complaining on the import statements. Without typescript's project references, I would needs to prebuild each project for both of that functions to work.

Another problem I have with typescript's Project References is the need to specify `.json` file-type in tsconfig.json. (see [this line](https://github.com/ApolloTang/study--rush--web-app/blob/main/1a--add-node-app/tools/heft-config-default-rig/profiles/react-ui/tsconfig-base.json#L31)). This happens because of [this issue](https://github.com/microsoft/TypeScript/issues/25636). 

Specifying `.json` file-type in `tsconfig.json` interfers with heft-typescript task's [staticAssetsToCopy.excludeGlobs](https://github.com/ApolloTang/study--rush--web-app/blob/main/1a--add-node-app/tools/heft-config-default-rig/profiles/react-ui/config/typescript.json#L65) since tsc will copy all *.json into the output folder (`dist`); this is defeating the purpose of heft-typescript file copying task's glob for files not to copy. 

Specifying `.json` file-type in tsconfig.json, also causes heft-task's TSLint to lint `.json` files. For this I disable Tslint in [typescript.json](https://github.com/ApolloTang/study--rush--web-app/blob/main/0a--w-jest-in-web-app-1/tools/heft-config-default-rig/profiles/react-ui/config/typescript.json#L36), but resort to  invoke linting through other means without using heft tool chain.



---

### Quick start

Installation:

```
  nvm use 14.17.3
  yarn global add @microsoft/rush@5.52.0
  yarn global add pnpm@6.7.1
  rush install
  
  rush build:watch
```

Developing web-app:

```
  cd apps/web-app-1/
  rushx dev
```

Developing node-app:

```
  cd apps/node-app-1/
  rushx dev
```

---





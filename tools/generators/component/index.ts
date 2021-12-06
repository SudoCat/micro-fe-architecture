import { Tree, generateFiles, formatFiles, readProjectConfiguration, joinPathFragments, installPackagesTask, names } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { IGeneratorSchema } from './schema'

export default async function (tree: Tree, schema: IGeneratorSchema) {
  await libraryGenerator(tree, { name: schema.name });
  const { className } = names(schema.name);
  const libraryRoot = readProjectConfiguration(tree, schema.name).root;
  const substitutions = { ...schema, className, fileName: className };
  const path = joinPathFragments(__dirname, './files');
  console.log(path);
  generateFiles(tree, path, libraryRoot, substitutions);
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

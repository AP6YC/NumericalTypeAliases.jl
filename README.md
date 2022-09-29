# NumericalTypeAliases

A collection of type aliases restricting to numerical for multiple dispatch.

Please read the [documentation](https://ap6yc.github.io/NumericalTypeAliases.jl/dev/) for detailed usage and tutorials.

- [NumericalTypeAliases](#numericaltypealiases)
  - [Overview](#overview)
  - [Installation](#installation)
  - [Quickstart](#quickstart)
  - [Structure](#structure)
  - [Contributing](#contributing)
  - [History](#history)
  - [Acknowledgements](#acknowledgements)
    - [Authors](#authors)
  - [License](#license)

## Overview

TODO

## Installation

This project is distributed as a Julia package, available on [JuliaHub](https://juliahub.com/).
Its usage follows the usual Julia package installation procedure, interactively:

```julia
] add NumericalTypeAliases
```

or programmatically:

```julia
using Pkg
Pkg.add("NumericalTypeAliases")
```

You may also add the package directly from GitHub to get the latest changes between releases:

```julia
] add https://github.com/AP6YC/NumericalTypeAliases.jl
```

## Quickstart

After installation, load the module with

```julia
using NumericalTypeAliases
```

TODO

## Structure

The following file tree summarizes the project structure:

```console
ScientificTypesAliases
├── .github/workflows       // GitHub: workflows for testing and documentation.
├── docs                    // Docs: documentation for the module.
│   └─── src                //      Documentation source files.
├── src                     // Source: majority of source code.
├── test                    // Test: Unit, integration, and environment tests.
├── .gitignore              // Git: .gitignore for the whole project.
├── LICENSE                 // Doc: the license to the project.
├── Project.toml            // Julia: the Pkg.jl dependencies of the project.
└── README.md               // Doc: this document.
```

## Contributing

If you have a question or concern, please raise an [issue][issues-url].
For more details on how to work with the project, propose changes, or even contribute code, please see the [Developer Notes][contrib-url] in the project's documentation.

In summary:

1. Questions and requested changes should all be made in the [issues][issues-url] page.
These are preferred because they are publicly viewable and could assist or educate others with similar issues or questions.
2. For changes, this project accepts pull requests (PRs) from `feature/<my-feature>` branches onto the `develop` branch using the [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) methodology.
If unit tests pass and the changes are beneficial, these PRs are merged into `develop` and eventually folded into versioned releases.
3. The project follows the [Semantic Versioning](https://semver.org/) convention of `major.minor.patch` incremental versioning numbers.
Patch versions are for bug fixes, minor versions are for backward-compatible changes, and major versions are for new and incompatible usage changes.

## History

- 9/29/2022 - Begin project.

## Acknowledgements

### Authors

This package is developed and maintained by [Sasha Petrenko](https://github.com/AP6YC) with sponsorship by the [Applied Computational Intelligence Laboratory (ACIL)](https://acil.mst.edu/). This project is supported by grants from the [Night Vision Electronic Sensors Directorate](https://c5isr.ccdc.army.mil/inside_c5isr_center/nvesd/), the [DARPA Lifelong Learning Machines (L2M) program](https://www.darpa.mil/program/lifelong-learning-machines), [Teledyne Technologies](http://www.teledyne.com/), and the [National Science Foundation](https://www.nsf.gov/).
The material, findings, and conclusions here do not necessarily reflect the views of these entities.

## License

This software is openly maintained by the ACIL of the Missouri University of Science and Technology under the [MIT License](LICENSE).

using Documenter
push!(LOAD_PATH, "../src/")
using NumericalTypeAliases

# Make the documentation
makedocs(
    modules=[NumericalTypeAliases],
    format=Documenter.HTML(
        prettyurls = get(ENV, "CI", nothing) == "true",
    ),
    # format=Documenter.HTML(),
    pages=[
        "Home" => "index.md",
        "Tutorial" => [
            "Guide" => "man/guide.md",
            "Contributing" => "man/contributing.md",
            "Index" => "man/full-index.md"
        ]
    ],
    repo="https://github.com/AP6YC/NumericalTypeAliases.jl/blob/{commit}{path}#L{line}",
    sitename="NumericalTypeAliases.jl",
    authors="Sasha Petrenko",
)

deploydocs(
    repo="github.com/AP6YC/NumericalTypeAliases.jl.git",
    devbranch="develop",
)

using Documenter
using Logging

# Get the current workind directory's base name
current_dir = basename(pwd())
@info "Current directory is $(current_dir)"

# If using the CI method `julia --project=docs/ docs/make.jl`
#   or `julia --startup-file=no --project=docs/ docs/make.jl`
if occursin("NumericalTypeAliases", current_dir)
    push!(LOAD_PATH, "../src/")
# Otherwise, we are already in the docs project and need to dev the above package
elseif occursin("docs", current_dir)
    Pkg.develop(path="..")
# Otherwise, building docs from the wrong path
else
    error("Unrecognized docs setup path")
end

# Include the package
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
        "Manual" => [
            "Guide" => "man/guide.md",
            "Contributing" => "man/contributing.md",
            "Index" => "man/full-index.md"
        ]
    ],
    repo="https://github.com/AP6YC/NumericalTypeAliases.jl/blob/{commit}{path}#L{line}",
    sitename="NumericalTypeAliases.jl",
    authors="Sasha Petrenko",
)

# Deploy the documentation
deploydocs(
    repo="github.com/AP6YC/NumericalTypeAliases.jl.git",
    devbranch="develop",
)

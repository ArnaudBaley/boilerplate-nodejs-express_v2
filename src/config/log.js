const defaultFileLoglevel = "error";
const defaultConsoleLoglevel = "warn";

const maxSizeFile = 5242880;
const maxFiles = 5;

const dev = "development";
const env = process.env.NODE_ENV || dev

const getFileLoglevel = () => {
    return env !== dev ? defaultFileLoglevel : "debug"
};

const getConsoleLoglevel = () => {
    return env !== dev ? defaultConsoleLoglevel : "debug"
};

export { getFileLoglevel, getConsoleLoglevel, maxSizeFile, maxFiles };
module.exports = (sequelize, DataTypes) => {

    const Filmes = sequelize.define("Filmes", {
        TítuloTraduzido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        TituloOriginal: {
            type: DataTypes.STRING,
            allowNull: false
        },
        IMDb:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Lançamento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Genero:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Formato:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Qualidade:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Idioma:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Legenda:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Tamanho:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Duracao:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Qualidadedoaudio:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Qualidadedevídeo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Sinopse:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Link:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Filmes;
};
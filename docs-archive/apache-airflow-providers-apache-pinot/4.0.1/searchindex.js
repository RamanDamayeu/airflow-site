Search.setIndex({"docnames": ["_api/airflow/providers/apache/pinot/hooks/index", "_api/airflow/providers/apache/pinot/hooks/pinot/index", "_api/airflow/providers/apache/pinot/index", "commits", "index", "installing-providers-from-sources"], "filenames": ["_api/airflow/providers/apache/pinot/hooks/index.rst", "_api/airflow/providers/apache/pinot/hooks/pinot/index.rst", "_api/airflow/providers/apache/pinot/index.rst", "commits.rst", "index.rst", "installing-providers-from-sources.rst"], "titles": ["<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.pinot.hooks</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.pinot.hooks.pinot</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.apache.pinot</span></code>", "Package apache-airflow-providers-apache-pinot", "<code class=\"docutils literal notranslate\"><span class=\"pre\">apache-airflow-providers-apache-pinot</span></code>", "Installing from sources"], "terms": {"4": [0, 1, 2, 5], "0": [0, 1, 2, 5], "1": [0, 1, 2, 5], "2": [0, 1, 2, 5], "5": [0, 1, 2, 3, 4, 5], "dev0": [0, 1, 2, 3, 4, 5], "thi": [0, 1, 2, 3, 4, 5], "i": [0, 1, 2, 3, 4, 5], "an": [0, 1, 2, 3, 4, 5], "experiment": [0, 1, 2, 3, 4, 5], "featur": [0, 1, 2, 3, 5], "pinotadminhook": [1, 4], "conn_id": 1, "pinot_admin_default": 1, "cmd_path": 1, "admin": [1, 3, 4], "sh": [1, 3, 4], "pinot_admin_system_exit": 1, "fals": 1, "sourc": [1, 4], "base": 1, "basehook": 1, "wrapper": 1, "around": 1, "script": [1, 3, 5], "For": [1, 3, 4, 5], "now": [1, 3, 4], "onli": [1, 4], "small": 1, "subset": 1, "its": 1, "subcommand": 1, "ar": [1, 4, 5], "implement": [1, 3], "which": [1, 3, 4], "requir": [1, 3], "ingest": 1, "offlin": 1, "data": 1, "e": 1, "addschema": 1, "addtabl": 1, "createseg": 1, "uploadseg": 1, "Their": 1, "command": [1, 3, 4], "option": [1, 3], "v0": 1, "unfortun": 1, "alwai": 1, "exit": 1, "statu": 1, "code": [1, 3, 4, 5], "To": [1, 5], "address": 1, "behavior": 1, "user": [1, 5], "can": [1, 4, 5], "us": [1, 3, 4, 5], "flag": 1, "If": [1, 4, 5], "valu": 1, "set": 1, "evalu": [1, 3], "result": 1, "output": 1, "messag": 1, "instead": 1, "": [1, 3, 5], "suppos": 1, "improv": [1, 3], "next": 1, "releas": [1, 3, 4], "includ": [1, 3], "follow": [1, 3, 5], "pr": 1, "http": [1, 3, 4, 5], "github": [1, 4], "com": [1, 4, 5], "incub": 1, "pull": 1, "4110": 1, "paramet": [1, 3, 4], "str": 1, "The": [1, 3, 4, 5], "name": [1, 3], "connect": [1, 4], "do": [1, 5], "modifi": 1, "It": [1, 5], "filepath": 1, "execut": 1, "version": [1, 3, 4, 5], "must": [1, 4], "remain": [1, 3], "default": 1, "left": [1, 5], "here": 1, "accident": 1, "overrid": [1, 3, 4], "case": 1, "posit": 1, "were": 1, "initi": [1, 4], "bool": [1, 3], "true": 1, "otherwis": [1, 4], "failur": 1, "error": 1, "except": 1, "get_conn": 1, "return": 1, "add_schema": 1, "schema_fil": 1, "with_exec": 1, "add": [1, 3, 4], "schema": 1, "run": [1, 3, 4, 5], "file": [1, 3, 4, 5], "add_tabl": 1, "file_path": 1, "tabl": 1, "configur": 1, "create_seg": 1, "generator_config_fil": 1, "none": [1, 5], "data_dir": 1, "segment_format": 1, "out_dir": 1, "overwrit": 1, "table_nam": 1, "segment_nam": 1, "time_column_nam": 1, "reader_config_fil": 1, "enable_star_tree_index": 1, "star_tree_index_spec_fil": 1, "hll_size": 1, "hll_column": 1, "hll_suffix": 1, "num_thread": 1, "post_creation_verif": 1, "retri": 1, "creat": [1, 5], "segment": 1, "upload_seg": 1, "segment_dir": 1, "upload": 1, "type": [1, 3], "ani": [1, 5], "run_cli": 1, "cmd": 1, "verbos": 1, "list": [1, 3, 4], "go": 1, "pinotdbapihook": 1, "arg": 1, "log_sql": 1, "kwarg": 1, "common": [1, 3, 4], "sql": [1, 3, 4], "dbapihook": [1, 3, 4], "interact": [1, 3], "broker": [1, 3], "queri": 1, "api": [1, 3, 4], "standard": 1, "endpoint": 1, "sinc": 1, "pql": 1, "soon": 1, "deprec": [1, 3, 4], "doc": [1, 3], "org": [1, 5], "conn_name_attr": 1, "pinot_broker_conn_id": 1, "default_conn_nam": 1, "pinot_broker_default": 1, "supports_autocommit": 1, "establish": 1, "through": 1, "dbapi": 1, "get_uri": 1, "get": [1, 5], "uri": 1, "g": 1, "localhost": 1, "9000": 1, "get_record": 1, "record": 1, "statement": 1, "iter": 1, "map": 1, "render": 1, "get_first": 1, "first": [1, 4], "row": 1, "abstract": 1, "set_autocommit": 1, "conn": 1, "autocommit": 1, "insert_row": 1, "target_field": 1, "commit_everi": 1, "1000": 1, "replac": 1, "A": 1, "gener": [1, 3], "wai": 1, "insert": 1, "tupl": 1, "new": [1, 3], "transact": 1, "everi": 1, "target": 1, "column": 1, "fill": 1, "int": 1, "maximum": 1, "number": [1, 3], "one": [1, 5], "all": [1, 3, 4], "whether": 1, "hook": [2, 3], "detail": [3, 4, 5], "commit": 3, "chang": 3, "high": 3, "level": 3, "changelog": 3, "see": [3, 4], "inform": 3, "latest": 3, "2022": 3, "11": [3, 5], "24": 3, "subject": 3, "2e20e9f7eb": 3, "prepar": 3, "up": 3, "relas": 3, "novemb": 3, "27774": 3, "80c327bd3b": 3, "bump": [3, 4], "27888": [3, 4], "15": 3, "12c3c39d1a": 3, "wave": 3, "27613": 3, "1d4fd5c6ea": 3, "13": 3, "hard": [3, 4], "27641": [3, 4], "78b8ea2f22": 3, "10": [3, 4], "move": [3, 4], "min": [3, 4], "27196": [3, 4], "36b9217415": 3, "pinotdb": [3, 4], "27201": [3, 4], "2a34dc9e84": 3, "23": 3, "enabl": 3, "string": 3, "normal": 3, "python": [3, 4, 5], "format": 3, "27205": 3, "09": 3, "28": 3, "f8db64c35c": 3, "updat": [3, 4], "septemb": 3, "26731": 3, "5ff0bc69a5": 3, "27": 3, "fix": 3, "depend": 3, "26705": [3, 4], "06acf40a43": 3, "appli": [3, 4], "pep": 3, "563": 3, "postpon": 3, "annot": 3, "non": 3, "core": 3, "26289": 3, "ca9229b6f": 3, "08": 3, "18": 3, "lower": [3, 4], "bound": [3, 4], "25789": [3, 4], "e5ac6c7cfb": 3, "august": 3, "25618": 3, "5d4abbd58c": 3, "07": 3, "hql": [3, 4], "synchron": [3, 4], "method": [3, 4], "25299": [3, 4], "df00436569": 3, "22": 3, "unifi": [3, 4], "23971": [3, 4], "d2459a241b": 3, "document": [3, 4], "juli": 3, "25030": 3, "46bbfdade0": 3, "class": [3, 4], "24836": [3, 4], "0de31bd73a": 3, "06": 3, "29": 3, "insid": 3, "folder": [3, 5], "24672": 3, "dcdcf3a2b8": 3, "note": 3, "rc2": 3, "mai": 3, "24307": 3, "717a7588bc": 3, "descript": 3, "remov": [3, 4, 5], "doubl": 3, "specif": 3, "24292": 3, "aeabe994b3": 3, "24231": 3, "b4a5783a2a": 3, "chore": [3, 4], "refactor": [3, 4], "clean": [3, 4], "24219": [3, 4], "027b707d21": 3, "05": 3, "explanatori": 3, "contributor": 3, "about": [3, 5], "24229": 3, "03": 3, "d7dbfb7e26": 3, "bugfix": 3, "22383": 3, "14": 3, "16adc035b1": 3, "classifi": [3, 4], "march": 3, "22226": 3, "f5b96315fe": 3, "feb": 3, "22056": 3, "d94fa37830": 3, "02": 3, "januari": 3, "delai": 3, "21439": 3, "6c3a67d4fc": 3, "2021": [3, 5], "21257": 3, "602abe8394": 3, "01": 3, "20": 3, "line": 3, "sphinx": 3, "autoapi": 3, "support": [3, 4], "typehint": 3, "20951": 3, "30": 3, "0a68588479": 3, "17890": 3, "87f408b1e7": 3, "26": 3, "17116": 3, "b916b75079": 3, "17015": 3, "866a601b76": 3, "pylint": 3, "from": [3, 4], "our": 3, "toolchain": 3, "16682": 3, "bbc627a3da": 3, "16501": 3, "cbf8001d76": 3, "16": 3, "after": 3, "buggfix": 3, "16464": 3, "1fba5402bb": 3, "more": 3, "june": 3, "16405": 3, "9c94b72d44": 3, "16294": 3, "807ad32ce5": 3, "pip": [3, 4, 5], "21": 3, "compat": 3, "15576": 3, "40a2476a5d": 3, "04": 3, "when": [3, 4], "15518": 3, "4b031d39e1": 3, "make": 3, "8": 3, "15534": 3, "68e4c4dcb0": 3, "backport": 3, "14886": 3, "88bdcfa0df": 3, "14013": 3, "ac2f72c98d": 3, "tool": 3, "13767": 3, "295d66f914": 3, "2020": 3, "12": [3, 5], "grammar": 3, "warn": [3, 5], "13380": 3, "6cf76d7ac0": 3, "typo": 3, "upgrad": [3, 4], "13148": 3, "5090fb0c89": 3, "integr": 3, "json": 3, "13073": 3, "32971a1a2d": 3, "12955": 3, "b40dffa085": 3, "renam": 3, "rema": 3, "modul": 3, "match": [3, 5], "aip": 3, "12917": 3, "c34ef853c8": 3, "separ": 3, "out": 3, "build": [3, 5], "per": 3, "12444": 3, "0080354502": 3, "readm": [3, 4], "0b2": 3, "batch": 3, "12449": 3, "7ca0b6f121": 3, "markdownlint": 3, "rule": 3, "md003": 3, "head": 3, "style": 3, "header": 3, "12427": 3, "12438": 3, "ae7cb4a1e2": 3, "17": 3, "wrong": 3, "hash": 3, "12390": 3, "6889a333cf": 3, "oper": 3, "ref": 3, "12366": 3, "309b325c17": 3, "12333": 3, "7825e8f590": 3, "instal": 3, "12304": 3, "85a18e13d9": 3, "point": 3, "pypi": [3, 4], "project": 3, "page": [3, 5], "cross": 3, "12212": 3, "59eb5de78c": 3, "come": 3, "0beta1": 3, "12206": 3, "b2a28d1590": 3, "dev": 3, "12082": 3, "41bf172c1d": 3, "simplifi": 3, "express": 3, "12093": 3, "4e8f9cc8d0": 3, "black": 3, "auto": [3, 4], "formmatt": 3, "9550": 3, "8c42cf1b00": 3, "pyupgrad": 3, "6": 3, "11447": 3, "5a439e84eb": 3, "2a1": 3, "11855": 3, "872b1566a1": 3, "25": 3, "setup": 3, "11826": 3, "349b0811c3": 3, "d200": 3, "pydocstyl": 3, "check": [3, 5], "11688": 3, "16e7129719": 3, "ad": [3, 4], "11487": 3, "0a0e1af800": 3, "broken": 3, "markdown": 3, "link": [3, 5], "toc": 3, "11249": 3, "ca4238eb4d": 3, "month": 3, "octob": 3, "11242": 3, "5220e4c384": 3, "11238": 3, "e3f96ce7a8": 3, "incorrect": 3, "usag": 3, "11138": 3, "fdd9b6f65b": 3, "10543": 3, "3696c34c28": 3, "word": 3, "10528": 3, "ee7ca128a1": 3, "refernc": 3, "10483": 3, "4d74ac2111": 3, "19": 3, "increas": 3, "9729": 3, "d0e7db4024": 3, "fresh": 3, "9408": 3, "12af6a0800": 3, "final": 3, "cleanup": 3, "23rc1": 3, "9404": 3, "c7e5bce57f": 3, "candid": 3, "9370": 3, "f6bd817a3a": 3, "introduc": 3, "transfer": 3, "9320": 3, "0b0e4f7a4c": 3, "rc3": 3, "9026": 3, "00642a46d0": 3, "wrongli": 3, "8994": 3, "375d1ca229": 3, "8898": 3, "12c5e5d8a": 3, "8891": 3, "f3521fb0e3": 3, "regener": 3, "8886": 3, "92585ca4cb": 3, "autom": 3, "8807": 3, "45c8983306": 3, "less": 3, "aggress": 3, "eager": 3, "8267": 3, "4bde99f132": 3, "7802": 3, "7e6372a681": 3, "call": 3, "super": 3, "7820": 3, "97a429f9d0": 3, "6714": 3, "magic": 3, "comment": 3, "utf": 3, "7338": 3, "0481b9a957": 3, "6539": 3, "7142": 3, "repositori": 4, "you": [4, 5], "top": [4, 5], "exist": 4, "below": [4, 5], "minimum": 4, "via": [4, 5], "7": 4, "those": [4, 5], "might": 4, "need": 4, "order": 4, "specifi": 4, "them": 4, "exampl": [4, 5], "extra": 4, "verifi": 4, "checksum": [4, 5], "signatur": [4, 5], "site": 4, "sdist": [4, 5], "asc": [4, 5], "sha512": [4, 5], "wheel": 4, "avail": [4, 5], "explain": 4, "polici": 4, "path": 4, "blob": 4, "main": [4, 5], "md": 4, "mistakenli": 4, "install_requir": 4, "22382": 4, "trove": 4, "framework": 4, "optimis": 4, "import": [4, 5], "apply_default": 4, "decor": 4, "15667": 4, "due": 4, "your": 4, "want": [4, 5], "least": 4, "automat": 4, "have": 4, "manual": 4, "db": 4, "complet": 4, "migrat": 4, "describ": 5, "download": 5, "apach": 5, "airflow": 5, "provid": 5, "pinot": 5, "offici": 5, "also": 5, "most": 5, "choos": 5, "differ": 5, "select": 5, "drop": 5, "down": 5, "whl": 5, "origin": 5, "softwar": 5, "foundat": 5, "abov": 5, "contain": 5, "how": 5, "pgp": 5, "kei": 5, "essenti": 5, "sha": 5, "gpg": 5, "pleas": 5, "well": 5, "relev": 5, "distribut": 5, "recommend": 5, "directori": 5, "mirror": 5, "pgpk": 5, "ka": 5, "binari": 5, "guid": 5, "pgpv": 5, "tar": 5, "gz": 5, "made": 5, "sat": 5, "sep": 5, "49": 5, "54": 5, "bst": 5, "rsa": 5, "cde15c6e4d3a8ec4ecf4ba4b6674e08ad7de406f": 5, "issuer": 5, "kaxilnaik": 5, "good": 5, "kaxil": 5, "naik": 5, "unknown": 5, "aka": 5, "gmail": 5, "id": 5, "certifi": 5, "trust": 5, "There": 5, "indic": 5, "belong": 5, "owner": 5, "primari": 5, "fingerprint": 5, "cde1": 5, "5c6e": 5, "4d3a": 5, "8ec4": 5, "ecf4": 5, "ba4b": 5, "6674": 5, "e08a": 5, "d7de": 5, "406f": 5, "correct": 5, "worri": 5, "certif": 5, "manag": 5, "self": 5, "sign": 5, "why": 5, "By": 5, "server": 5, "previou": 5, "step": 5, "know": 5, "valid": 5, "alreadi": 5, "sum": 5, "shasum": 5, "512": 5, "diff": 5, "should": 5, "local": 5, "bin": 5, "bash": 5, "package_vers": 5, "package_nam": 5, "provider_download_dir": 5, "mktemp": 5, "d": 5, "dep": 5, "dest": 5, "curl": 5, "apache_airflow_providers_apache_pinot": 5, "py3": 5, "l": 5, "o": 5, "echo": 5, "la": 5, "onc": 5, "instruct": 5, "chapter": 5, "temporari": 5}, "objects": {"airflow.providers.apache": [[2, 0, 0, "-", "pinot"]], "airflow.providers.apache.pinot": [[0, 0, 0, "-", "hooks"]], "airflow.providers.apache.pinot.hooks": [[1, 0, 0, "-", "pinot"]], "airflow.providers.apache.pinot.hooks.pinot": [[1, 1, 1, "", "PinotAdminHook"], [1, 1, 1, "", "PinotDbApiHook"]], "airflow.providers.apache.pinot.hooks.pinot.PinotAdminHook": [[1, 2, 1, "", "add_schema"], [1, 2, 1, "", "add_table"], [1, 2, 1, "", "create_segment"], [1, 2, 1, "", "get_conn"], [1, 2, 1, "", "run_cli"], [1, 2, 1, "", "upload_segment"]], "airflow.providers.apache.pinot.hooks.pinot.PinotDbApiHook": [[1, 3, 1, "", "conn_name_attr"], [1, 3, 1, "", "default_conn_name"], [1, 2, 1, "", "get_conn"], [1, 2, 1, "", "get_first"], [1, 2, 1, "", "get_records"], [1, 2, 1, "", "get_uri"], [1, 2, 1, "", "insert_rows"], [1, 2, 1, "", "set_autocommit"], [1, 3, 1, "", "supports_autocommit"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:attribute"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "attribute", "Python attribute"]}, "titleterms": {"airflow": [0, 1, 2, 3, 4], "provid": [0, 1, 2, 3, 4], "apach": [0, 1, 2, 3, 4], "pinot": [0, 1, 2, 3, 4], "hook": [0, 1], "submodul": 0, "modul": 1, "content": [1, 4], "class": 1, "subpackag": 2, "packag": [3, 4, 5], "4": [3, 4], "0": [3, 4], "1": [3, 4], "3": [3, 4], "2": [3, 4], "refer": 4, "commit": 4, "instal": [4, 5], "requir": 4, "cross": 4, "depend": 4, "download": 4, "offici": 4, "changelog": 4, "bug": 4, "fix": 4, "break": 4, "chang": 4, "misc": 4, "featur": 4, "from": 5, "sourc": 5, "releas": 5, "integr": 5, "verifi": 5, "pypi": 5}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"airflow.providers.apache.pinot.hooks": [[0, "module-airflow.providers.apache.pinot.hooks"]], "Submodules": [[0, "submodules"]], "airflow.providers.apache.pinot.hooks.pinot": [[1, "module-airflow.providers.apache.pinot.hooks.pinot"]], "Module Contents": [[1, "module-contents"]], "Classes": [[1, "classes"]], "airflow.providers.apache.pinot": [[2, "module-airflow.providers.apache.pinot"]], "Subpackages": [[2, "subpackages"]], "Package apache-airflow-providers-apache-pinot": [[3, "package-apache-airflow-providers-apache-pinot"], [4, "package-apache-airflow-providers-apache-pinot"]], "4.0.1": [[3, "id1"], [4, "id1"]], "4.0.0": [[3, "id2"], [4, "id2"]], "3.2.1": [[3, "id3"], [4, "id3"]], "3.2.0": [[3, "id4"], [4, "id6"]], "3.1.0": [[3, "id5"], [4, "id7"]], "3.0.0": [[3, "id6"], [4, "id9"]], "2.0.4": [[3, "id7"], [4, "id12"]], "2.0.3": [[3, "id8"], [4, "id14"]], "2.0.2": [[3, "id9"], [4, "id16"]], "2.0.1": [[3, "id10"], [4, "id18"]], "2.0.0": [[3, "id11"], [4, "id20"]], "1.0.1": [[3, "id12"], [4, "id22"]], "1.0.0": [[3, "id13"], [4, "id23"]], "apache-airflow-providers-apache-pinot": [[4, "apache-airflow-providers-apache-pinot"]], "Content": [[4, "content"]], "References": [[4, null]], "Commits": [[4, null]], "Provider package": [[4, "provider-package"]], "Installation": [[4, "installation"]], "Requirements": [[4, "requirements"]], "Cross provider package dependencies": [[4, "cross-provider-package-dependencies"]], "Downloading official packages": [[4, "downloading-official-packages"]], "Changelog": [[4, "changelog"]], "Bug Fixes": [[4, "bug-fixes"], [4, "id5"], [4, "id13"]], "Breaking changes": [[4, "breaking-changes"], [4, "id10"], [4, "id21"]], "Misc": [[4, "misc"], [4, "id4"], [4, "id11"], [4, "id15"], [4, "id17"], [4, "id19"]], "Features": [[4, "features"], [4, "id8"]], "Installing from sources": [[5, "installing-from-sources"]], "Released packages": [[5, "released-packages"]], "Release integrity": [[5, "release-integrity"]], "Verifying PyPI releases": [[5, "verifying-pypi-releases"]]}, "indexentries": {"airflow.providers.apache.pinot.hooks": [[0, "module-airflow.providers.apache.pinot.hooks"]], "module": [[0, "module-airflow.providers.apache.pinot.hooks"], [1, "module-airflow.providers.apache.pinot.hooks.pinot"], [2, "module-airflow.providers.apache.pinot"]], "pinotadminhook (class in airflow.providers.apache.pinot.hooks.pinot)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotAdminHook"]], "pinotdbapihook (class in airflow.providers.apache.pinot.hooks.pinot)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotDbApiHook"]], "add_schema() (airflow.providers.apache.pinot.hooks.pinot.pinotadminhook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotAdminHook.add_schema"]], "add_table() (airflow.providers.apache.pinot.hooks.pinot.pinotadminhook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotAdminHook.add_table"]], "airflow.providers.apache.pinot.hooks.pinot": [[1, "module-airflow.providers.apache.pinot.hooks.pinot"]], "conn_name_attr (airflow.providers.apache.pinot.hooks.pinot.pinotdbapihook attribute)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotDbApiHook.conn_name_attr"]], "create_segment() (airflow.providers.apache.pinot.hooks.pinot.pinotadminhook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotAdminHook.create_segment"]], "default_conn_name (airflow.providers.apache.pinot.hooks.pinot.pinotdbapihook attribute)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotDbApiHook.default_conn_name"]], "get_conn() (airflow.providers.apache.pinot.hooks.pinot.pinotadminhook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotAdminHook.get_conn"]], "get_conn() (airflow.providers.apache.pinot.hooks.pinot.pinotdbapihook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotDbApiHook.get_conn"]], "get_first() (airflow.providers.apache.pinot.hooks.pinot.pinotdbapihook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotDbApiHook.get_first"]], "get_records() (airflow.providers.apache.pinot.hooks.pinot.pinotdbapihook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotDbApiHook.get_records"]], "get_uri() (airflow.providers.apache.pinot.hooks.pinot.pinotdbapihook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotDbApiHook.get_uri"]], "insert_rows() (airflow.providers.apache.pinot.hooks.pinot.pinotdbapihook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotDbApiHook.insert_rows"]], "run_cli() (airflow.providers.apache.pinot.hooks.pinot.pinotadminhook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotAdminHook.run_cli"]], "set_autocommit() (airflow.providers.apache.pinot.hooks.pinot.pinotdbapihook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotDbApiHook.set_autocommit"]], "supports_autocommit (airflow.providers.apache.pinot.hooks.pinot.pinotdbapihook attribute)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotDbApiHook.supports_autocommit"]], "upload_segment() (airflow.providers.apache.pinot.hooks.pinot.pinotadminhook method)": [[1, "airflow.providers.apache.pinot.hooks.pinot.PinotAdminHook.upload_segment"]], "airflow.providers.apache.pinot": [[2, "module-airflow.providers.apache.pinot"]]}})
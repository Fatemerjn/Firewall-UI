from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


interface_data = []
static_data = []
policy_data = []


@app.route('/add_interface', methods=['POST'])
def add_interface():
    global interface_data
    try:
        new_data = request.json
        interface_data.append(new_data)

        response = {'message': 'Interface added successfully'}
        return jsonify(response), 200
    except Exception as e:
        response = {'message': 'Error adding interface'}
        return jsonify(response), 500

@app.route('/edit_interface/<int:index>', methods=['PUT'])
def edit_interface(index):
    edited_interface = request.json
    interface_data[index] = edited_interface
    return jsonify({"message": "Interface edited successfully"})

@app.route('/delete_interface/<int:index>', methods=['DELETE'])
def delete_interface(index):
    if 0 <= index < len(interface_data):
        deleted_interface = interface_data.pop(index)
        return jsonify({"message": f"Interface '{deleted_interface['name']}' deleted successfully"})
    return jsonify({"error": "Invalid index"})

@app.route('/get_interface', methods=['GET'])
def get_interface_data():
    global interface_data
    return jsonify(interface_data)

@app.route('/dns_apply', methods=['POST'])
def dns_apply():
    try:
        dns_data = request.json
        print(dns_data)

        response = {'message': 'Applied!'}
        return jsonify(response), 200
    except Exception as e:
        response = {'message': 'Error!'}
        return jsonify(response), 500

@app.route('/get_sslOptions', methods=['GET'])
def get_sslOptions():
    options = [
     { 'value': 'option1', 'label': 'Option 1' },
     { 'value': 'option2', 'label': 'Option 2' },
     { 'value': 'option3', 'label': 'Option 3' },
   ]
    return jsonify(options)

@app.route('/add_staticroute', methods=['POST'])
def add_staticroute():
    global static_data
    try:
        new_data = request.json
        static_data.append(new_data)
        print(static_data)
        response = {'message': 'static route added successfully'}
        return jsonify(response), 200
    except Exception as e:
        response = {'message': 'Error adding static route'}
        return jsonify(response), 500

@app.route('/edit_staticroute/<int:index>', methods=['PUT'])
def edit_staticroute(index):
    edited_staticroute = request.json
    static_data[index] = edited_staticroute
    return jsonify({"message": "static route edited successfully"})

@app.route('/delete_staticroute/<int:index>', methods=['DELETE'])
def delete_staticroute(index):
    if 0 <= index < len(static_data):
        deleted_staticroute = static_data.pop(index)
        return jsonify({"message": f"ُStatic Route '{deleted_staticroute['destination']}' deleted successfully"})
    return jsonify({"error": "Invalid index"})

@app.route('/get_staticroute', methods=['GET'])
def get_static_data():
    global static_data
    return jsonify(static_data)

@app.route('/add_policyroute', methods=['POST'])
def add_policyroute():
    global policy_data
    try:
        new_data = request.json
        policy_data.append(new_data)
        print(policy_data)
        response = {'message': 'policy route added successfully'}
        return jsonify(response), 200
    except Exception as e:
        response = {'message': 'Error adding policy route'}
        return jsonify(response), 500

@app.route('/edit_policyroute/<int:index>', methods=['PUT'])
def edit_policyroute(index):
    edited_policyroute = request.json
    policy_data[index] = edited_policyroute
    return jsonify({"message": "policy route edited successfully"})

@app.route('/delete_policyroute/<int:index>', methods=['DELETE'])
def delete_policyroute(index):
    if 0 <= index < len(policy_data):
        deleted_policyroute = policy_data.pop(index)
        return jsonify({"message": f"ُpolicy Route '{deleted_policyroute['seq']}' deleted successfully"})
    return jsonify({"error": "Invalid index"})

@app.route('/get_policyroute', methods=['GET'])
def get_policy_data():
    global policy_data
    return jsonify(policy_data)

if __name__ == '__main__':
    app.run(debug=True)